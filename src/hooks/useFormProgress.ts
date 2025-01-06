import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/AuthContext';

export function useFormProgress(tableName: string) {
  const { user } = useAuth();
  const [savedData, setSavedData] = useState<any>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const saveTimeoutRef = useRef<number>();
  const lastSavedDataRef = useRef<any>(null);

  useEffect(() => {
    if (user) {
      fetchSavedData();
    }
  }, [user, tableName]);

  const fetchSavedData = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') throw error;
      
      const { id, user_id, created_at, updated_at, ...fields } = data || {};
      setSavedData(fields || {});
      lastSavedDataRef.current = fields || {};
    } catch (error) {
      console.error('Error fetching saved data:', error);
    }
  };

  const saveData = useCallback(async (formData: any) => {
    if (!user) return;
    
    // Don't save if data hasn't changed
    if (JSON.stringify(formData) === JSON.stringify(lastSavedDataRef.current)) {
      return;
    }

    // Clear any pending save timeout
    if (saveTimeoutRef.current) {
      window.clearTimeout(saveTimeoutRef.current);
    }

    // Set a new timeout for saving
    saveTimeoutRef.current = window.setTimeout(async () => {
      try {
        setSaveStatus('saving');

        const { error } = await supabase
          .from(tableName)
          .upsert({
            user_id: user.id,
            ...formData,
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'user_id'
          });

        if (error) throw error;
        
        lastSavedDataRef.current = formData;
        setSavedData(formData);
        setSaveStatus('saved');
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setSaveStatus('idle');
        }, 3000);
      } catch (error) {
        console.error('Error saving data:', error);
        setSaveStatus('error');
      }
    }, 500); // Reduced debounce time for more responsive saving
  }, [user, tableName]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        window.clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return {
    savedData,
    saveStatus,
    saveData,
    refetch: fetchSavedData
  };
}
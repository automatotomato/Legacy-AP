import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/AuthContext';

export function useQuestionnaireData(tableName: string) {
  const { user } = useAuth();
  const [data, setData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [user, tableName]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data: result, error: supabaseError } = await supabase
        .from(tableName)
        .select('*')
        .eq('user_id', user?.id)
        .maybeSingle();

      if (supabaseError) {
        // Only throw error if it's not the "no rows returned" error
        if (supabaseError.code !== 'PGRST116') {
          throw supabaseError;
        }
      }

      // If we have data, use it. Otherwise, use empty object
      const { id, user_id, created_at, updated_at, ...fields } = result || {};
      setData(fields || {});
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch data';
      setError(errorMessage);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateField = async (field: string, value: string) => {
    if (!user) return;

    try {
      setError(null);
      const updates = {
        user_id: user.id,
        [field]: value,
        updated_at: new Date().toISOString()
      };

      const { error: updateError } = await supabase
        .from(tableName)
        .upsert(updates, { onConflict: 'user_id' });

      if (updateError) throw updateError;

      setData(prev => ({ ...prev, [field]: value }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update data';
      setError(errorMessage);
      console.error('Error updating field:', err);
      throw err;
    }
  };

  return {
    data,
    loading,
    error,
    updateField,
    refetch: fetchData
  };
}
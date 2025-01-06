import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Upload, Info } from 'lucide-react';
import { useAuth } from '../../../lib/AuthContext';
import { supabase } from '../../../lib/supabase';
import MediaSlide from './MediaSlide';
import VideoRecorder from './VideoRecorder';

interface MediaItem {
  file: File;
  preview: string;
  caption: string;
  date?: string;
  location?: string;
  people?: string;
  story?: string;
}

export default function MediaUpload() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [showVideoRecorder, setShowVideoRecorder] = useState(false);
  const maxSlides = 30;

  const handleFileSelect = (file: File) => {
    if (mediaItems.length >= maxSlides) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newItem: MediaItem = {
        file,
        preview: reader.result as string,
        caption: '',
      };
      setMediaItems(prev => [...prev, newItem]);
    };
    reader.readAsDataURL(file);
  };

  const updateMediaItem = (index: number, updates: Partial<MediaItem>) => {
    setMediaItems(prev => {
      const newItems = [...prev];
      newItems[index] = { ...newItems[index], ...updates };
      return newItems;
    });
  };

  const removeMediaItem = (index: number) => {
    setMediaItems(prev => prev.filter((_, i) => i !== index));
    if (currentSlide >= index && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  if (showVideoRecorder) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setShowVideoRecorder(false)}
          className="flex items-center gap-2 text-gray-600 hover:text-legacy-600"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Media Upload
        </button>
        <VideoRecorder />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Media Upload</h2>
        <p className="mt-1 text-gray-600">
          Share up to 30 photos, documents, or videos that tell your story
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
        <Info className="w-5 h-5 text-legacy-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium text-gray-900">Before You Begin</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>• Upload any type of file that helps tell your story</li>
            <li>• Add detailed context about each item</li>
            <li>• Include dates, locations, and people featured</li>
            <li>• Share the story behind each item</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <MediaSlide
            currentItem={mediaItems[currentSlide]}
            onFileSelect={handleFileSelect}
            onUpdate={(updates) => updateMediaItem(currentSlide, updates)}
            onRemove={() => removeMediaItem(currentSlide)}
            isLastSlide={currentSlide === mediaItems.length}
            maxReached={mediaItems.length >= maxSlides}
          />
        </div>
      </div>
    </div>
  );
}
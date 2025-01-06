import React, { useRef, useState } from 'react';
import { Upload, X, Plus, Video } from 'lucide-react';
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

interface MediaSlideProps {
  currentItem?: MediaItem;
  onFileSelect: (file: File) => void;
  onUpdate: (updates: Partial<MediaItem>) => void;
  onRemove: () => void;
  isLastSlide: boolean;
  maxReached: boolean;
}

export default function MediaSlide({
  currentItem,
  onFileSelect,
  onUpdate,
  onRemove,
  isLastSlide,
  maxReached
}: MediaSlideProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showVideoRecorder, setShowVideoRecorder] = useState(false);

  if (showVideoRecorder) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setShowVideoRecorder(false)}
          className="text-gray-600 hover:text-legacy-600 font-medium"
        >
          ← Back to Media Details
        </button>
        <VideoRecorder />
      </div>
    );
  }

  if (isLastSlide && !maxReached) {
    return (
      <div className="flex flex-col items-center justify-center p-6 sm:p-12 border-2 border-dashed 
                     border-gray-300 rounded-lg hover:border-legacy-500 cursor-pointer min-h-[200px]"
           onClick={() => fileInputRef.current?.click()}
      >
        <Plus className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-gray-600 text-center">
          <span className="hidden sm:inline">Click to add photos, documents, or videos</span>
          <span className="sm:hidden">Add media</span>
          <br />
          <span className="text-sm text-gray-500">
            Images, PDFs, Videos (max 50MB)
          </span>
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,application/pdf,video/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              onFileSelect(e.target.files[0]);
            }
          }}
        />
      </div>
    );
  }

  if (!currentItem) return null;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="relative">
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {currentItem.file.type.startsWith('image/') ? (
            <img
              src={currentItem.preview}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          ) : currentItem.file.type.startsWith('video/') ? (
            <video
              src={currentItem.preview}
              controls
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">
                {currentItem.file.name}
              </p>
            </div>
          )}
        </div>
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md 
                   hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Caption
          </label>
          <input
            type="text"
            value={currentItem.caption}
            onChange={(e) => onUpdate({ caption: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-legacy-500 
                     focus:ring-legacy-500"
            placeholder="Add a caption..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            People Featured
          </label>
          <input
            type="text"
            value={currentItem.people || ''}
            onChange={(e) => onUpdate({ people: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-legacy-500 
                     focus:ring-legacy-500"
            placeholder="Who is in this media?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            value={currentItem.date || ''}
            onChange={(e) => onUpdate({ date: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-legacy-500 
                     focus:ring-legacy-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            value={currentItem.location || ''}
            onChange={(e) => onUpdate({ location: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-legacy-500 
                     focus:ring-legacy-500"
            placeholder="Where was this taken?"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Story Behind This Item
        </label>
        <textarea
          value={currentItem.story || ''}
          onChange={(e) => onUpdate({ story: e.target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-legacy-500 
                   focus:ring-legacy-500"
          rows={4}
          placeholder="Share the story behind this item..."
        />
      </div>

      <button
        onClick={() => setShowVideoRecorder(true)}
        className="flex items-center gap-2 px-4 py-2 bg-legacy-600 text-white rounded-lg
                 hover:bg-legacy-700 transition-colors"
      >
        <Video className="w-5 h-5" />
        Record Video Context
      </button>
    </div>
  );
}
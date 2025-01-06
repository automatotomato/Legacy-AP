import React, { useState, useRef } from 'react';
import { Upload, X, Plus, Info } from 'lucide-react';
import { useAuth } from '../../../lib/AuthContext';
import { supabase } from '../../../lib/supabase';

interface PhotoItem {
  file: File;
  preview: string;
  caption: string;
  date?: string;
  location?: string;
}

export default function PhotoUpload() {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files).map(file => ({
        file,
        preview: URL.createObjectURL(file),
        caption: '',
      }));
      setPhotos(prev => [...prev, ...newPhotos].slice(0, 30));
    }
  };

  const handleUpload = async () => {
    if (!user || !photos.length) return;
    setUploading(true);

    try {
      for (const photo of photos) {
        const fileExt = photo.file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${user.id}/photos/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('media')
          .upload(filePath, photo.file);

        if (uploadError) throw uploadError;

        // Save photo metadata
        const { error: metadataError } = await supabase
          .from('photo_metadata')
          .insert([{
            user_id: user.id,
            file_path: filePath,
            caption: photo.caption,
            date_taken: photo.date,
            location: photo.location
          }]);

        if (metadataError) throw metadataError;
      }

      setPhotos([]);
    } catch (error) {
      console.error('Error uploading photos:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
        <Info className="w-5 h-5 text-legacy-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium text-gray-900">Photo Guidelines</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>• Upload up to 30 meaningful photos</li>
            <li>• Add captions to provide context</li>
            <li>• Include dates and locations if known</li>
            <li>• Supported formats: JPG, PNG (max 10MB each)</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="space-y-2">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
              <img
                src={photo.preview}
                alt={`Upload ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setPhotos(prev => prev.filter((_, i) => i !== index))}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <input
              type="text"
              value={photo.caption}
              onChange={(e) => {
                const newPhotos = [...photos];
                newPhotos[index].caption = e.target.value;
                setPhotos(newPhotos);
              }}
              className="w-full text-sm rounded-md border-gray-300 focus:border-legacy-500 focus:ring-legacy-500"
              placeholder="Add a caption..."
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                value={photo.date || ''}
                onChange={(e) => {
                  const newPhotos = [...photos];
                  newPhotos[index].date = e.target.value;
                  setPhotos(newPhotos);
                }}
                className="w-full text-sm rounded-md border-gray-300 focus:border-legacy-500 focus:ring-legacy-500"
              />
              <input
                type="text"
                value={photo.location || ''}
                onChange={(e) => {
                  const newPhotos = [...photos];
                  newPhotos[index].location = e.target.value;
                  setPhotos(newPhotos);
                }}
                className="w-full text-sm rounded-md border-gray-300 focus:border-legacy-500 focus:ring-legacy-500"
                placeholder="Location..."
              />
            </div>
          </div>
        ))}

        {photos.length < 30 && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="aspect-square rounded-lg border-2 border-dashed border-gray-300 
                     flex flex-col items-center justify-center gap-2
                     hover:border-legacy-500 hover:bg-gray-50 transition-colors"
          >
            <Plus className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-600">Add Photo</span>
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileSelect}
      />

      {photos.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="flex items-center gap-2 px-4 py-2 bg-legacy-600 text-white rounded-lg
                     hover:bg-legacy-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Upload className="w-5 h-5" />
            {uploading ? 'Uploading...' : 'Upload Photos'}
          </button>
        </div>
      )}
    </div>
  );
}
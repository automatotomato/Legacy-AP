import React, { useState, useEffect } from 'react';
import { Edit2, Save, X } from 'lucide-react';

interface QuestionFieldProps {
  id: string;
  question: string;
  value: string;
  prompts: string[];
  onSave: (id: string, value: string) => void;
}

export default function QuestionField({ id, question, value, prompts, onSave }: QuestionFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value || '');

  useEffect(() => {
    setCurrentValue(value || '');
  }, [value]);

  const handleSave = () => {
    onSave(id, currentValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setCurrentValue(value || '');
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start gap-4 mb-3">
        <label className="block text-lg font-medium text-gray-900">
          {question}
        </label>
        <div className="flex items-center gap-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mb-3">
        <div className="flex flex-wrap gap-2">
          {prompts.map((prompt, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
            >
              {prompt}
            </span>
          ))}
        </div>
      </div>

      {isEditing ? (
        <textarea
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          rows={6}
          placeholder="Share your story..."
        />
      ) : (
        <div className="prose prose-emerald max-w-none">
          {currentValue ? (
            <p className="text-gray-700 whitespace-pre-wrap">{currentValue}</p>
          ) : (
            <p className="text-gray-400 italic">No answer yet. Click edit to add your story.</p>
          )}
        </div>
      )}
    </div>
  );
}
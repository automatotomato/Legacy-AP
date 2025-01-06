import React from 'react';
import { useFormContext } from 'react-hook-form';

interface QuestionProps {
  id: string;
  question: string;
  prompts: string[];
}

export default function QuestionForm({ id, question, prompts }: QuestionProps) {
  const { register } = useFormContext();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <label className="block text-lg font-medium text-gray-900 mb-2">
        {question}
      </label>
      <div className="mb-3">
        <div className="flex flex-wrap gap-2">
          {prompts.map((prompt, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              {prompt}
            </span>
          ))}
        </div>
      </div>
      <textarea
        {...register(id)}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        rows={6}
        placeholder="Share your story..."
      />
    </div>
  );
}
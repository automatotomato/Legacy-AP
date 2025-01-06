import React from 'react';

interface QuestionCardProps {
  question: string;
  prompts: string[];
  answer: string;
  onChange: (value: string) => void;
}

export default function QuestionCard({ question, prompts, answer, onChange }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full mb-6">
      <div className="bg-emerald-50 p-4 border-b border-emerald-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{question}</h3>
        <div className="flex flex-wrap gap-2">
          {prompts.map((prompt, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                       bg-white text-emerald-700 shadow-sm"
            >
              {prompt}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <textarea
          value={answer}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 
                   focus:ring-emerald-500 min-h-[200px] text-base leading-relaxed"
          placeholder="Share your story here..."
          style={{ fontFamily: 'Georgia, serif' }}
        />
      </div>
    </div>
  );
}
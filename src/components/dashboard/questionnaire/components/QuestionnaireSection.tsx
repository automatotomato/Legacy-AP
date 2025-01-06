import React from 'react';
import { useFormContext } from 'react-hook-form';

interface QuestionProps {
  id: string;
  question: string;
  description?: string;
}

export default function QuestionnaireSection({ questions }: { questions: QuestionProps[] }) {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      {questions.map((q) => (
        <div key={q.id} className="bg-white p-6 rounded-lg shadow-sm">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            {q.question}
          </label>
          {q.description && (
            <p className="text-sm text-gray-600 mb-3">{q.description}</p>
          )}
          <textarea
            {...register(q.id)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            rows={4}
            placeholder="Share your story..."
          />
        </div>
      ))}
    </div>
  );
}
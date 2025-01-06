import React from 'react';
import { DemoFormData } from './DemoFormTypes';
import { demoQuestions } from '../../data/demoQuestions';

interface QuestionsStepProps {
  data: Partial<DemoFormData>;
  onChange: (field: keyof DemoFormData, value: string) => void;
  onSubmit: () => void;
}

export default function QuestionsStep({ data, onChange, onSubmit }: QuestionsStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.childhoodMemory && data.familyTradition && data.futureLegacy) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {demoQuestions.map((question) => (
        <div key={question.id}>
          <label htmlFor={question.id} className="block text-sm font-medium text-gray-700">
            {question.question}
          </label>
          <textarea
            id={question.id}
            value={data[question.id as keyof DemoFormData] || ''}
            onChange={(e) => onChange(question.id as keyof DemoFormData, e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            rows={3}
            required
            placeholder={question.placeholder}
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold
                 shadow-lg hover:bg-emerald-700 transition-colors"
      >
        Start Your Demo Interview
      </button>
    </form>
  );
}
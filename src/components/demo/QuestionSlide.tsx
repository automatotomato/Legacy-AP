import React from 'react';
import { motion } from 'framer-motion';

interface QuestionSlideProps {
  question: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
}

export default function QuestionSlide({
  question,
  placeholder,
  value,
  onChange,
  onNext,
  currentStep,
  totalSteps
}: QuestionSlideProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
        <span>Question {currentStep} of {totalSteps}</span>
        <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
      </div>

      <div className="h-1 bg-gray-100 rounded-full">
        <div 
          className="h-full bg-emerald-600 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-900 mb-2">
            {question}
          </label>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 
                     focus:ring-emerald-500 min-h-[120px]"
            placeholder={placeholder}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold
                   shadow-lg hover:bg-emerald-700 transition-colors"
        >
          {currentStep === totalSteps ? 'Get Your Interview Number' : 'Continue'}
        </button>
      </form>
    </motion.div>
  );
}
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuestionNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelectQuestion: (index: number) => void;
}

export default function QuestionNavigation({
  currentIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onSelectQuestion
}: QuestionNavigationProps) {
  return (
    <div className="flex items-center justify-between px-3 py-2 sm:px-6 sm:py-4 bg-gray-50 border-t border-gray-100 rounded-lg">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-emerald-600 
                 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Previous
      </button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelectQuestion(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
              ${index === currentIndex ? 'bg-emerald-600 w-4' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentIndex === totalQuestions - 1}
        className="flex items-center gap-2 px-4 py-2 text-white bg-emerald-600 rounded-lg 
                 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
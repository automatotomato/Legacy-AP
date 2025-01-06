import React from 'react';
import { Book, Star } from 'lucide-react';

interface ProgressHeaderProps {
  currentIndex: number;
  totalQuestions: number;
  completedCount: number;
  progress: number;
}

export default function ProgressHeader({ currentIndex, totalQuestions, completedCount, progress }: ProgressHeaderProps) {
  return (
    <div className="mb-4 sm:mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <Book className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              Memory {currentIndex + 1} of {totalQuestions}
            </h2>
            <p className="text-sm text-gray-600">
              {completedCount} memories captured
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
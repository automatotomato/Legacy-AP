import React from 'react';
import { Award, Gift, Star } from 'lucide-react';

interface AchievementsProps {
  completedCount: number;
}

export default function Achievements({ completedCount }: AchievementsProps) {
  if (completedCount === 0) return null;

  return (
    <div className="mt-4 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl shadow-sm">
      <div className="flex items-center gap-2 sm:gap-3 mb-4">
        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
        <h4 className="text-base sm:text-lg font-semibold text-emerald-900">Memory Milestones</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {completedCount >= 3 && (
          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg shadow-sm">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
            <span className="text-sm sm:text-base text-emerald-800 font-medium">Story Explorer Achievement</span>
          </div>
        )}
        {completedCount >= 5 && (
          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg shadow-sm">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
            <span className="text-sm sm:text-base text-emerald-800 font-medium">Memory Master Badge</span>
          </div>
        )}
      </div>
    </div>
  );
}
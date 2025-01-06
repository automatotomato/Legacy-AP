import React from 'react';
import { motion } from 'framer-motion';

interface QuestionnaireProgressProps {
  currentSection: string;
  totalSections: number;
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuestionnaireProgress({
  currentSection,
  totalSections,
  currentQuestion,
  totalQuestions
}: QuestionnaireProgressProps) {
  const sectionProgress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{currentSection}</h3>
        <span className="text-sm text-gray-600">
          Question {currentQuestion} of {totalQuestions}
        </span>
      </div>

      {/* Question Progress */}
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-legacy-600"
          initial={{ width: 0 }}
          animate={{ width: `${sectionProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-500">Section {currentSection} Progress</span>
        <span className="text-xs font-medium text-legacy-600">
          {Math.round(sectionProgress)}%
        </span>
      </div>
    </div>
  );
}
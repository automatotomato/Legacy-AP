import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useFormProgress } from '../../../../hooks/useFormProgress';
import { QuestionnaireProps, QuestionnaireConfig } from './types';
import InterviewPrompt from '../InterviewPrompt';

export default function BaseQuestionnaire({ 
  config,
  onComplete, 
  onBack 
}: QuestionnaireProps & { config: QuestionnaireConfig }) {
  const { savedData, saveData } = useFormProgress(config.tableName);
  const [currentAnswers, setCurrentAnswers] = useState(savedData || {});
  const [isComplete, setIsComplete] = useState(false);
  const [showInterview, setShowInterview] = useState(false);

  const handleChange = (id: string, value: string) => {
    const newAnswers = { ...currentAnswers, [id]: value };
    setCurrentAnswers(newAnswers);
    saveData(newAnswers);
    
    const allAnswered = config.questions.every(q => newAnswers[q.id]?.trim());
    setIsComplete(allAnswered);
  };

  const handleSubmit = () => {
    setShowInterview(true);
  };

  if (showInterview) {
    return (
      <InterviewPrompt 
        section={config.title}
        onContinue={onComplete}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-legacy-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Overview
        </button>
        <div className="text-sm text-gray-600">
          {Object.keys(currentAnswers).length}/{config.questions.length} questions answered
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-legacy-100 flex items-center justify-center">
            {config.icon}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{config.title}</h2>
        </div>
        
        <div className="space-y-8">
          {config.questions.map((q) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <label className="block text-lg font-medium text-gray-900">
                {q.question}
              </label>
              <textarea
                value={currentAnswers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-legacy-500 
                         focus:ring-legacy-500 min-h-[120px]"
                placeholder={q.placeholder}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className="w-full py-3 bg-legacy-600 text-white rounded-lg font-semibold
                     shadow-lg hover:bg-legacy-700 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors"
          >
            {config.nextStepText}
          </button>
          {!isComplete && (
            <p className="text-sm text-gray-600 text-center mt-2">
              Please answer all questions to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
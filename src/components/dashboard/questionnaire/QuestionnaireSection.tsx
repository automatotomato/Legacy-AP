import React from 'react';
import { motion } from 'framer-motion';
import { QuestionnaireConfig } from './types';
import { getQuestionnaireIcon } from './configs/icons';

interface QuestionnaireSectionProps {
  config: QuestionnaireConfig;
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
  onComplete: () => void;
}

export default function QuestionnaireSection({
  config,
  answers,
  onAnswerChange,
  onComplete
}: QuestionnaireSectionProps) {
  const isComplete = config.questions.every(q => answers[q.id]?.trim());
  const icon = getQuestionnaireIcon(config.iconType);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-legacy-100 flex items-center justify-center">
          {icon}
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
              value={answers[q.id] || ''}
              onChange={(e) => onAnswerChange(q.id, e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-legacy-500 
                       focus:ring-legacy-500 min-h-[120px]"
              placeholder={q.placeholder}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={onComplete}
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
  );
}
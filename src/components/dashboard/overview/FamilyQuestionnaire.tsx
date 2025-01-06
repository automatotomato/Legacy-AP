import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useFormProgress } from '../../../hooks/useFormProgress';

interface FamilyQuestionnaireProps {
  onComplete: () => void;
  onBack: () => void;
}

const familyQuestions = [
  {
    id: 'familyOrigins',
    question: 'What do you know about your family\'s history and cultural heritage?',
    placeholder: 'Share about your family\'s origins, immigration stories, or cultural traditions...'
  },
  {
    id: 'parentsStory',
    question: 'Tell me about your parents\' love story and the life they built together.',
    placeholder: 'How did they meet? What was their early life together like?'
  },
  {
    id: 'familyValues',
    question: 'What core values were instilled in you by your family?',
    placeholder: 'What principles or life lessons did your family emphasize?'
  },
  {
    id: 'grandparentsLegacy',
    question: 'What wisdom or traditions did your grandparents pass down?',
    placeholder: 'Share memorable lessons, stories, or traditions from your grandparents...'
  },
  {
    id: 'familyChallenges',
    question: 'What significant challenges has your family faced and overcome together?',
    placeholder: 'Describe how your family handled difficult times and grew stronger...'
  }
];

export default function FamilyQuestionnaire({ onComplete, onBack }: FamilyQuestionnaireProps) {
  const { savedData, saveData } = useFormProgress('questionnaire_family');
  const [currentAnswers, setCurrentAnswers] = useState(savedData || {});
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (id: string, value: string) => {
    const newAnswers = { ...currentAnswers, [id]: value };
    setCurrentAnswers(newAnswers);
    saveData(newAnswers);
    
    // Check if all questions are answered
    const allAnswered = familyQuestions.every(q => newAnswers[q.id]?.trim());
    setIsComplete(allAnswered);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Overview
        </button>
        <div className="text-sm text-gray-600">
          {Object.keys(currentAnswers).length}/5 questions answered
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Family Background</h2>
        
        <div className="space-y-8">
          {familyQuestions.map((q) => (
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
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 
                         focus:ring-emerald-500 min-h-[120px]"
                placeholder={q.placeholder}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={onComplete}
            disabled={!isComplete}
            className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold
                     shadow-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors"
          >
            Continue to Phone Interview
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
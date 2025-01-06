import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormProgress } from '../../../../hooks/useFormProgress';
import { questionnaireQuestions } from '../../../../data/questionnaireQuestions';
import { debounce } from '../../../../utils/debounce';
import ProgressHeader from '../components/ProgressHeader';
import QuestionCard from '../components/QuestionCard';
import QuestionNavigation from '../components/QuestionNavigation';
import Achievements from '../components/Achievements';
import SaveStatus from '../components/SaveStatus';

interface SectionFormProps {
  section: keyof typeof questionnaireQuestions;
  tableName: string;
}

export default function SectionForm({ section, tableName }: SectionFormProps) {
  const { savedData, saveStatus, saveData } = useFormProgress(tableName);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const questions = questionnaireQuestions[section];
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  React.useEffect(() => {
    if (savedData && currentQuestion) {
      setCurrentAnswer(savedData[currentQuestion.id] || '');
    }
  }, [currentQuestion, savedData]);

  const debouncedSave = useCallback(
    debounce(async (data: any) => {
      await saveData(data);
    }, 1000),
    [saveData]
  );

  const handleChange = (value: string) => {
    setCurrentAnswer(value);
    const updatedData = {
      ...savedData,
      [currentQuestion.id]: value
    };
    debouncedSave(updatedData);
  };

  const getCompletedCount = () => {
    return Object.values(savedData || {}).filter(Boolean).length;
  };

  return (
    <div className="max-w-3xl mx-auto px-3 py-3 sm:px-6 sm:py-6">
      <ProgressHeader 
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        completedCount={getCompletedCount()}
        progress={progress}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="min-w-0 w-full"
        >
          <QuestionCard
            question={currentQuestion.question}
            prompts={currentQuestion.prompts}
            answer={currentAnswer}
            onChange={handleChange}
          />

          <QuestionNavigation
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onPrevious={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            onNext={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
            onSelectQuestion={setCurrentQuestionIndex}
          />
        </motion.div>
      </AnimatePresence>

      <Achievements completedCount={getCompletedCount()} />
      <SaveStatus status={saveStatus} isDirty={false} />
    </div>
  );
}
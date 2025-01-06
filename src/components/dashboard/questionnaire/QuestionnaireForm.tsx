import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormProgress } from '../../../hooks/useFormProgress';
import { questionnaireQuestions } from '../../../data/questionnaireQuestions';
import ProgressHeader from './components/ProgressHeader';
import QuestionCard from './components/QuestionCard';
import QuestionNavigation from './components/QuestionNavigation';
import Achievements from './components/Achievements';
import SaveStatus from './components/SaveStatus';
import LoadingSpinner from '../../ui/LoadingSpinner';
import ErrorMessage from '../../ui/ErrorMessage';

export default function QuestionnaireForm() {
  const { section } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  
  if (!section || !questionnaireQuestions[section]) {
    return <ErrorMessage message="Invalid section" />;
  }

  const { savedData, saveStatus, saveData, loading } = useFormProgress(`questionnaire_${section}`);
  const questions = questionnaireQuestions[section];
  const currentQuestion = questions[currentQuestionIndex];

  // Load saved data when available
  useEffect(() => {
    if (savedData) {
      setAnswers(savedData);
    }
  }, [savedData]);

  const handleChange = (value: string) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: value
    };
    setAnswers(newAnswers);
    saveData(newAnswers).catch(err => {
      setError('Failed to save your answer. Please try again.');
      console.error('Save error:', err);
    });
  };

  const getCompletedCount = () => {
    return Object.values(answers).filter(Boolean).length;
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      // Last question - check if all are answered
      const allAnswered = questions.every(q => answers[q.id]?.trim());
      if (allAnswered) {
        // Navigate to next section or show completion state
        const sections = Object.keys(questionnaireQuestions);
        const currentSectionIndex = sections.indexOf(section);
        if (currentSectionIndex < sections.length - 1) {
          navigate(`/dashboard/questionnaire/${sections[currentSectionIndex + 1]}`);
        }
      }
    } else {
      setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1));
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-3xl mx-auto px-3 py-3 sm:px-6 sm:py-6">
      <ProgressHeader 
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        completedCount={getCompletedCount()}
        progress={(getCompletedCount() / questions.length) * 100}
      />

      {error && (
        <div className="mb-4">
          <ErrorMessage message={error} />
        </div>
      )}

      <QuestionCard
        question={currentQuestion.question}
        prompts={currentQuestion.prompts}
        answer={answers[currentQuestion.id] || ''}
        onChange={handleChange}
      />

      <QuestionNavigation
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onPrevious={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
        onNext={handleNext}
        onSelectQuestion={setCurrentQuestionIndex}
      />

      <Achievements completedCount={getCompletedCount()} />
      <SaveStatus status={saveStatus} isDirty={false} />
    </div>
  );
}
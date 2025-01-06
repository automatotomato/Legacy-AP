import { ReactNode } from 'react';

export interface Question {
  id: string;
  question: string;
  placeholder: string;
}

export interface QuestionnaireProps {
  onComplete: () => void;
  onBack: () => void;
}

export interface QuestionnaireConfig {
  title: string;
  tableName: string;
  questions: Question[];
  nextStepText: string;
  icon: ReactNode;
}
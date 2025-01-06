import { LucideIcon } from 'lucide-react';

export interface Question {
  id: string;
  question: string;
  placeholder: string;
}

export interface QuestionnaireConfig {
  id: string;
  title: string;
  iconType: 'users' | 'baby' | 'briefcase' | 'heart' | 'sparkles';
  nextStepText: string;
  questions: Question[];
}
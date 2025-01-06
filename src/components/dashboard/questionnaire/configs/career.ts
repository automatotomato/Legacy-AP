import { QuestionnaireConfig } from '../types';

export const careerConfig: QuestionnaireConfig = {
  id: 'career',
  title: "Career Journey",
  iconType: 'briefcase',
  nextStepText: "Schedule Interview",
  questions: [
    {
      id: 'firstJob',
      question: 'What was your first job and what did it teach you?',
      placeholder: 'Share your earliest work experiences and the lessons learned...'
    },
    {
      id: 'careerPath',
      question: 'How did your career path unfold? What choices shaped it?',
      placeholder: 'Describe the key decisions and turning points in your career...'
    },
    {
      id: 'achievements',
      question: 'What professional achievements are you most proud of?',
      placeholder: 'Tell us about your most significant accomplishments at work...'
    },
    {
      id: 'challenges',
      question: 'What were the biggest challenges in your career and how did you overcome them?',
      placeholder: 'Share the obstacles you faced and how you handled them...'
    },
    {
      id: 'legacy',
      question: 'What professional legacy do you hope to leave behind?',
      placeholder: 'Describe the impact you hope to have made through your work...'
    }
  ]
};
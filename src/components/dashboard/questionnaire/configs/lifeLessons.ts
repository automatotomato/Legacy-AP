import { QuestionnaireConfig } from '../types';

export const lifeLessonsConfig: QuestionnaireConfig = {
  id: 'lifeLessons',
  title: "Life Lessons & Wisdom",
  iconType: 'sparkles',
  nextStepText: "Schedule Interview",
  questions: [
    {
      id: 'philosophy',
      question: 'What is your philosophy on life?',
      placeholder: 'Share the core beliefs and principles that guide you...'
    },
    {
      id: 'wisdom',
      question: 'What wisdom would you share with future generations?',
      placeholder: 'What important life lessons would you pass down...'
    },
    {
      id: 'proudest',
      question: 'What are your proudest moments and achievements?',
      placeholder: 'Tell us about the accomplishments that mean the most to you...'
    },
    {
      id: 'purpose',
      question: 'What gives your life purpose and meaning?',
      placeholder: 'Share what drives you and brings fulfillment to your life...'
    },
    {
      id: 'legacy',
      question: 'What legacy do you want to leave behind?',
      placeholder: 'Describe how you hope to be remembered and what you want to pass on...'
    }
  ]
};
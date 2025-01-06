import { QuestionnaireConfig } from '../types';

export const relationshipsConfig: QuestionnaireConfig = {
  id: 'relationships',
  title: "Relationships & Love",
  iconType: 'heart',
  nextStepText: "Schedule Interview",
  questions: [
    {
      id: 'partnership',
      question: 'Tell us about meeting your life partner and your journey together.',
      placeholder: 'Share the story of how you met and built your life together...'
    },
    {
      id: 'parenthood',
      question: 'What has being a parent taught you about life and love?',
      placeholder: 'Reflect on your experiences and lessons learned as a parent...'
    },
    {
      id: 'friendship',
      question: 'Who are your closest friends and what makes these bonds special?',
      placeholder: 'Tell us about the friendships that have shaped your life...'
    },
    {
      id: 'community',
      question: 'How have you built connections in your community?',
      placeholder: 'Share your experiences with community involvement and service...'
    },
    {
      id: 'influence',
      question: 'Who has had the greatest influence on your life and why?',
      placeholder: 'Describe the people who have most impacted your journey...'
    }
  ]
};
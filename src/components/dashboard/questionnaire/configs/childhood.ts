import { QuestionnaireConfig } from '../types';

export const childhoodConfig: QuestionnaireConfig = {
  id: 'childhood',
  title: "Childhood Memories",
  iconType: 'baby',
  nextStepText: "Schedule Interview",
  questions: [
    {
      id: 'birthplace',
      question: 'Where were you born and what was happening in your family at that time?',
      placeholder: 'Share the story of your birth and early family circumstances...'
    },
    {
      id: 'earlyMemories',
      question: 'What are your earliest childhood memories?',
      placeholder: 'Describe your most vivid early memories and how they made you feel...'
    },
    {
      id: 'familyLife',
      question: 'What was daily life like in your childhood home?',
      placeholder: 'Tell us about your family routines, traditions, and everyday experiences...'
    },
    {
      id: 'schoolYears',
      question: 'What were your school years like? Share your most memorable experiences.',
      placeholder: 'Describe your favorite teachers, friends, and important school moments...'
    },
    {
      id: 'childhoodDreams',
      question: 'What were your dreams and aspirations as a child?',
      placeholder: 'Share what you wanted to be when you grew up and why...'
    }
  ]
};
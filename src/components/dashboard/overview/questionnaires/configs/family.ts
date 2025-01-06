import { Users } from 'lucide-react';
import { QuestionnaireConfig } from '../types';

export const familyConfig: QuestionnaireConfig = {
  title: "Family Background",
  tableName: "questionnaire_family",
  icon: <Users className="w-6 h-6 text-legacy-600" />,
  nextStepText: "Schedule Interview",
  questions: [
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
  ]
};
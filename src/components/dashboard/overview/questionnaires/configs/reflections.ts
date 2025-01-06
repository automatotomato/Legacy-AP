import { Sparkles } from 'lucide-react';
import { QuestionnaireConfig } from '../types';

export const reflectionsConfig: QuestionnaireConfig = {
  title: "Reflecting on Life's Journey",
  tableName: "questionnaire_reflections",
  icon: <Sparkles className="w-6 h-6 text-legacy-600" />,
  nextStepText: "Continue to Final Review",
  questions: [
    {
      id: 'triumphs',
      question: 'What are your greatest triumphs when you look back over your life?',
      placeholder: 'Share the achievements and moments that make you most proud...'
    },
    {
      id: 'regrets',
      question: 'Are there any regrets or things you wish you had done differently?',
      placeholder: 'Reflect on choices or moments you would approach differently now...'
    },
    {
      id: 'challenges',
      question: 'How have challenges and failures shaped you?',
      placeholder: 'Describe how difficult experiences have contributed to your growth...'
    },
    {
      id: 'impact',
      question: 'What do you consider your most enduring impact on others or the world?',
      placeholder: 'Share how you hope your life has influenced others or created positive change...'
    },
    {
      id: 'fulfillment',
      question: 'What makes you feel most fulfilled about the life you\'ve led?',
      placeholder: 'Describe what brings you the deepest sense of satisfaction and meaning...'
    }
  ]
};
import { Users, Baby, Briefcase, Heart, Sparkles } from 'lucide-react';
import { QuestionnaireConfig } from './types';

export const familyConfig: QuestionnaireConfig = {
  title: "Family Background",
  tableName: "questionnaire_family",
  icon: <Users className="w-6 h-6 text-legacy-600" />,
  nextStepText: "Continue to Childhood",
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

export const childhoodConfig: QuestionnaireConfig = {
  title: "Childhood & Early Years",
  tableName: "questionnaire_childhood",
  icon: <Baby className="w-6 h-6 text-legacy-600" />,
  nextStepText: "Continue to Career",
  questions: [
    {
      id: 'schoolYears',
      question: 'Which schools did you attend as a child, and what do you remember most about them?',
      placeholder: 'Share your most memorable school experiences and what made them special...'
    },
    {
      id: 'teachers',
      question: 'Were there any teachers or mentors who significantly influenced you during these years?',
      placeholder: 'Tell us about the educators who made a lasting impact on your life...'
    },
    {
      id: 'childhood_friends',
      question: 'Can you recall a particular childhood friend or relationship that was special to you?',
      placeholder: 'Share stories about your closest childhood friendships...'
    },
    {
      id: 'hobbies',
      question: 'Did you have any early hobbies, interests, or activities you loved?',
      placeholder: 'Describe the activities that brought you joy in your youth...'
    },
    {
      id: 'early_lessons',
      question: 'Is there a particular moral lesson or value you learned as a child that has stayed with you?',
      placeholder: 'Share an important lesson from your childhood that shaped who you are...'
    }
  ]
};

export const careerConfig: QuestionnaireConfig = {
  title: "Career Journey",
  tableName: "questionnaire_career",
  icon: <Briefcase className="w-6 h-6 text-legacy-600" />,
  nextStepText: "Continue to Relationships",
  questions: [
    {
      id: 'first_job',
      question: 'What was your first job and what did it teach you?',
      placeholder: 'Tell us about your earliest work experience and its impact...'
    },
    {
      id: 'career_path',
      question: 'How did your career path unfold? What choices shaped it?',
      placeholder: 'Share the key decisions and moments that defined your career...'
    },
    {
      id: 'achievements',
      question: 'What professional achievements are you most proud of?',
      placeholder: 'Describe your most significant career accomplishments...'
    },
    {
      id: 'challenges',
      question: 'What were the biggest challenges in your career and how did you overcome them?',
      placeholder: 'Share how you handled difficult professional situations...'
    },
    {
      id: 'mentorship',
      question: 'Have you mentored others or been mentored? How did this impact your career?',
      placeholder: 'Tell us about important mentoring relationships in your professional life...'
    }
  ]
};

export const relationshipsConfig: QuestionnaireConfig = {
  title: "Relationships & Connections",
  tableName: "questionnaire_relationships",
  icon: <Heart className="w-6 h-6 text-legacy-600" />,
  nextStepText: "Continue to Life Lessons",
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
      id: 'friendships',
      question: 'Which friendships have been most significant in your life and why?',
      placeholder: 'Tell us about the friends who have made a lasting impact...'
    },
    {
      id: 'community',
      question: 'How have you built and maintained connections in your community?',
      placeholder: 'Share your experiences with community involvement and service...'
    },
    {
      id: 'legacy',
      question: 'What relationship advice would you give to future generations?',
      placeholder: 'Share your wisdom about building and maintaining meaningful relationships...'
    }
  ]
};

export const lifeLessonsConfig: QuestionnaireConfig = {
  title: "Life Lessons & Wisdom",
  tableName: "questionnaire_life_lessons",
  icon: <Sparkles className="w-6 h-6 text-legacy-600" />,
  nextStepText: "Complete Questionnaire",
  questions: [
    {
      id: 'advice',
      question: 'What advice would you offer to your children, grandchildren, or young people today?',
      placeholder: 'Share your most important advice and guidance for future generations...'
    },
    {
      id: 'life_mottos',
      question: 'Are there any life mottos or key lessons you\'d like to share?',
      placeholder: 'Tell us about the principles or sayings that have guided your life...'
    },
    {
      id: 'younger_self',
      question: 'What would you tell your younger self if you could go back in time?',
      placeholder: 'Looking back, what wisdom would you share with your younger self?'
    },
    {
      id: 'future_generations',
      question: 'What do you hope future generations learn from your experiences?',
      placeholder: 'Share the most important lessons you want to pass down...'
    },
    {
      id: 'cause_belief',
      question: 'Is there a cause or belief you\'d like to champion?',
      placeholder: 'Tell us about what matters most to you and why others should care...'
    }
  ]
};
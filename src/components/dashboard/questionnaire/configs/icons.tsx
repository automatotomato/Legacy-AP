import React from 'react';
import { Users, Baby, Briefcase, Heart, Sparkles } from 'lucide-react';

const iconComponents = {
  users: Users,
  baby: Baby,
  briefcase: Briefcase,
  heart: Heart,
  sparkles: Sparkles,
} as const;

export const getQuestionnaireIcon = (iconType: keyof typeof iconComponents) => {
  const IconComponent = iconComponents[iconType];
  return <IconComponent className="w-6 h-6 text-legacy-600" />;
};
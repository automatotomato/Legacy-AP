import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface WelcomeSlideProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tips: string[];
  currentStep: number;
  totalSteps: number;
}

export default function WelcomeSlide({
  icon: Icon,
  title,
  description,
  tips,
  currentStep,
  totalSteps
}: WelcomeSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center"
    >
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-emerald-600" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        {description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-emerald-50 p-4 rounded-lg"
          >
            <p className="text-emerald-800 font-medium">{tip}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
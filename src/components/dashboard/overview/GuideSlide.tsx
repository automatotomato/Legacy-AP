import React from 'react';
import { LucideIcon } from 'lucide-react';
import PhoneLink from '../../ui/PhoneLink';

interface GuideSlideProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tips: string[];
  currentStep: number;
  totalSteps: number;
  phoneNumber?: string;
}

export default function GuideSlide({
  icon: Icon,
  title,
  description,
  tips,
  currentStep,
  totalSteps,
  phoneNumber
}: GuideSlideProps) {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-legacy-50 flex items-center justify-center">
          <Icon className="w-8 h-8 text-legacy-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-legacy-600">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
      </div>
      
      <p className="text-gray-600 text-lg mb-4">{description}</p>
      
      {phoneNumber && (
        <div className="mb-6">
          <PhoneLink className="text-xl font-semibold text-legacy-600" />
        </div>
      )}

      <div className="bg-legacy-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Helpful Tips:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-legacy-400" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
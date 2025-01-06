import React from 'react';
import { useLocation } from 'react-router-dom';
import { Book, FileText, Baby, Briefcase, Heart, Sparkles, Upload, BookOpen } from 'lucide-react';

const steps = [
  { id: 'overview', path: '/dashboard', label: 'Overview', icon: Book },
  { id: 'family', path: '/dashboard/questionnaire/family', label: 'Family', icon: FileText },
  { id: 'childhood', path: '/dashboard/questionnaire/childhood', label: 'Childhood', icon: Baby },
  { id: 'career', path: '/dashboard/questionnaire/career', label: 'Career', icon: Briefcase },
  { id: 'relationships', path: '/dashboard/questionnaire/relationships', label: 'Relationships', icon: Heart },
  { id: 'life-lessons', path: '/dashboard/questionnaire/life-lessons', label: 'Life Lessons', icon: Sparkles },
  { id: 'media', path: '/dashboard/media', label: 'Media Upload', icon: Upload },
  { id: 'review', path: '/dashboard/review', label: 'Review', icon: BookOpen }
];

export default function DashboardProgress() {
  const location = useLocation();
  const currentStepIndex = steps.findIndex(step => 
    location.pathname.startsWith(step.path)
  ) || 0;
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Progress Info */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStepIndex + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium text-legacy-600">
            {Math.round(progress)}% Complete
          </span>
        </div>

        {/* Progress Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

          {/* Steps */}
          <div className="relative flex justify-between overflow-x-auto pb-2 hide-scrollbar">
            {steps.map((step, index) => {
              const isActive = location.pathname.startsWith(step.path);
              const isPast = index < currentStepIndex;
              
              return (
                <div key={step.id} className="flex-shrink-0 flex flex-col items-center px-2">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center relative z-10
                    ${isActive ? 'bg-legacy-600' : 
                      isPast ? 'bg-legacy-600' : 
                      'bg-white border-2 border-gray-300'}
                  `}>
                    <step.icon className={`w-4 h-4 
                      ${isActive || isPast ? 'text-white' : 'text-gray-400'}`} 
                    />
                  </div>
                  <span className={`mt-2 text-xs font-medium text-center whitespace-nowrap
                    ${isActive ? 'text-legacy-600' : 
                      isPast ? 'text-gray-900' : 
                      'text-gray-500'}
                  `}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
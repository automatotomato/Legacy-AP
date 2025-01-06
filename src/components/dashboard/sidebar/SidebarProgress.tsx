import React from 'react';
import { useLocation } from 'react-router-dom';

const steps = [
  { path: '/dashboard/questionnaire', label: 'Pre-Interview', status: 'current' },
  { path: '/dashboard/media', label: 'Media Upload', status: 'upcoming' },
  { path: '/dashboard/interview', label: 'Interview', status: 'upcoming' },
  { path: '/dashboard/review', label: 'Review', status: 'upcoming' }
] as const;

export default function SidebarProgress() {
  const location = useLocation();
  const currentStepIndex = steps.findIndex(step => step.path === location.pathname);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="px-4 py-3 border-b border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">
          Step {currentStepIndex + 1} of {steps.length}
        </span>
        <span className="text-sm font-medium text-emerald-600">
          {Math.round(progress)}% Complete
        </span>
      </div>
      
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isActive = location.pathname === step.path;
          const isPast = index < currentStepIndex;
          
          return (
            <div key={step.path} className="relative">
              {index !== 0 && (
                <div 
                  className="absolute left-2.5 -top-3 w-0.5 h-3 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex items-center gap-3">
                <div 
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${isActive ? 'border-emerald-600 bg-white' : 
                      isPast ? 'border-emerald-600 bg-emerald-600' : 
                      'border-gray-300 bg-white'}`}
                >
                  {isPast && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  )}
                </div>
                <span className={`text-sm font-medium
                  ${isActive ? 'text-emerald-600' : 
                    isPast ? 'text-gray-900' : 
                    'text-gray-500'}`}
                >
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
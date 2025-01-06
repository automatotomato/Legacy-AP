import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const steps = [
  { name: 'Pre-Interview', status: 'current' },
  { name: 'Media Upload', status: 'upcoming' },
  { name: 'Interview', status: 'upcoming' },
  { name: 'Review', status: 'upcoming' }
];

export default function ProgressTracker() {
  return (
    <div className="bg-white border-b">
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        {/* Mobile Progress Bar */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">
              Step {steps.findIndex(s => s.status === 'current') + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-emerald-600">
              {steps.find(s => s.status === 'current')?.name}
            </span>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-100 -translate-y-1/2" />
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div key={step.name} className="flex flex-col items-center">
                  {step.status === 'complete' ? (
                    <CheckCircle className="w-6 h-6 text-emerald-600 bg-white" />
                  ) : step.status === 'current' ? (
                    <div className="w-6 h-6 rounded-full border-2 border-emerald-600 bg-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    </div>
                  ) : (
                    <Circle className="w-6 h-6 text-gray-300 bg-white" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Progress Steps */}
        <div className="hidden sm:block">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-100 -translate-y-1/2" />
            <div className="grid grid-cols-4 gap-0">
              {steps.map((step, index) => (
                <div key={step.name} className="flex flex-col items-center text-center">
                  <div className="relative flex items-center justify-center bg-white">
                    {step.status === 'complete' ? (
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    ) : step.status === 'current' ? (
                      <div className="w-8 h-8 rounded-full border-2 border-emerald-600 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-600" />
                      </div>
                    ) : (
                      <Circle className="w-8 h-8 text-gray-300" />
                    )}
                  </div>
                  <span className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {step.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
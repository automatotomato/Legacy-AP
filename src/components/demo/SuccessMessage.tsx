import React from 'react';
import PhoneLink from '../ui/PhoneLink';

export default function SuccessMessage() {
  return (
    <div className="text-center py-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Your Story is Fascinating!
      </h3>
      <p className="text-lg text-gray-600 mb-6">
        Our interviewer is ready to explore these memories with you in a free 5-minute demo interview. Call now:
      </p>
      <div className="inline-flex items-center gap-3 text-2xl font-semibold text-emerald-600">
        <PhoneLink />
      </div>
    </div>
  );
}
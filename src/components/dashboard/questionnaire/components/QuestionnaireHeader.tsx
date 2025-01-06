import React from 'react';
import { FileText } from 'lucide-react';

export default function QuestionnaireHeader() {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
        <FileText className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Pre-Interview Questionnaire</h2>
        <p className="mt-1 text-gray-600">
          Help us prepare for your interviews by sharing some background information.
          Your responses will guide our conversation and ensure we capture your story completely.
        </p>
      </div>
    </div>
  );
}
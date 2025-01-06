import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function HelpSection() {
  return (
    <div className="bg-emerald-50 rounded-lg p-6 flex items-start gap-4">
      <div className="flex-shrink-0">
        <HelpCircle className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
        <p className="text-gray-600">
          Our support team is available 24/7 to assist you with any questions or concerns.
          Call us at (707) 383-6842 or email support@legacymemoirs.com
        </p>
      </div>
    </div>
  );
}
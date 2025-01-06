import React from 'react';
import { Phone, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import PhoneLink from '../../ui/PhoneLink';

interface InterviewPromptProps {
  section: string;
  onContinue: () => void;
}

export default function InterviewPrompt({ section, onContinue }: InterviewPromptProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-8 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-legacy-100 flex items-center justify-center mx-auto mb-6">
        <Phone className="w-8 h-8 text-legacy-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Schedule Your {section} Interview
      </h2>

      <p className="text-lg text-gray-600 mb-8">
        Thank you for completing the {section.toLowerCase()} questionnaire. Now it's time to schedule 
        your interview where we'll explore these memories in greater detail.
      </p>

      <div className="bg-legacy-50 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Interview Guidelines:</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5 text-legacy-600" />
            One-hour focused conversation
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <AlertCircle className="w-5 h-5 text-legacy-600" />
            Find a quiet room with good reception
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-legacy-600" />
            Use a direct phone line (no speaker/Bluetooth)
          </li>
        </ul>
      </div>

      <div className="text-center space-y-4">
        <p className="text-lg font-medium text-gray-900">
          Call now to schedule your interview:
        </p>
        <PhoneLink className="text-2xl font-bold text-legacy-600 hover:text-legacy-700" />
        <p className="text-sm text-gray-500 mt-4">
          After scheduling your interview, you can continue to the next section
        </p>
        <button
          onClick={onContinue}
          className="px-6 py-2 bg-legacy-600 text-white rounded-lg hover:bg-legacy-700"
        >
          Continue to Next Section
        </button>
      </div>
    </motion.div>
  );
}
import React from 'react';
import { Phone, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PhoneLink from '../../ui/PhoneLink';

export default function CallPrompt() {
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
        Ready for Your First Interview
      </h2>

      <p className="text-lg text-gray-600 mb-8">
        Thank you for sharing your family background. Now it's time for your first interview 
        session where we'll explore your childhood memories in detail.
      </p>

      <div className="bg-legacy-50 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">What to Expect:</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5 text-legacy-600" />
            60-minute phone interview
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-legacy-600" />
            Professional interviewer guides the conversation
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-legacy-600" />
            Focus on your childhood memories
          </li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-lg font-medium text-gray-900 mb-4">
          Call now to begin your interview:
        </p>
        <PhoneLink className="text-2xl font-bold text-legacy-600 hover:text-legacy-700" />
      </div>
    </motion.div>
  );
}
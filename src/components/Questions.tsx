import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const questions = [
  {
    text: "What stories will your grandchildren wish they had asked you about?",
    description: "Don't let precious memories and life lessons fade away. Your experiences are unique and irreplaceable."
  },
  {
    text: "How will your family remember the moments that shaped who you are?",
    description: "Every life journey contains wisdom worth preserving. Share yours before those stories are lost to time."
  },
  {
    text: "What legacy do you want to leave for future generations?",
    description: "Your values, traditions, and life lessons can guide and inspire your family for generations to come."
  }
];

export default function Questions() {
  return (
    <div className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Important Questions to Consider" 
          subtitle="Take a moment to reflect on your legacy"
        />
        
        <div className="grid gap-8">
          {questions.map((question, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1
                         transition-all duration-300 ease-in-out"
            >
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center mb-4">
                {question.text}
              </h3>
              <p className="text-center text-gray-600">
                {question.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
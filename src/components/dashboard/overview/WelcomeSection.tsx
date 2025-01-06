import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Phone, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InterviewerSelection from './InterviewerSelection';

export default function WelcomeSection() {
  const navigate = useNavigate();
  const [selectedInterviewer, setSelectedInterviewer] = useState<string>();

  const steps = [
    {
      icon: Book,
      title: "Begin Your Story",
      description: "Start with guided questions about each chapter of your life"
    },
    {
      icon: Phone,
      title: "Share Your Memories",
      description: "Have in-depth conversations with our expert interviewers"
    },
    {
      icon: Star,
      title: "Create Your Legacy",
      description: "Receive your beautifully written and designed memoir"
    }
  ];

  const handleBeginStory = () => {
    if (!selectedInterviewer) {
      // Scroll to interviewer selection with smooth behavior
      document.getElementById('interviewer-selection')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      return;
    }
    navigate('/dashboard/questionnaire/family');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900 mb-3"
        >
          Welcome to Your Legacy Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
          Let's preserve your story through our simple three-step process
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-legacy-50 flex items-center justify-center mb-4">
              <step.icon className="w-6 h-6 text-legacy-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div id="interviewer-selection">
        <InterviewerSelection
          selectedId={selectedInterviewer}
          onSelect={setSelectedInterviewer}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-legacy-50 p-6 rounded-lg text-center"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Ready to Begin?
        </h3>
        <p className="text-gray-600 mb-4">
          {selectedInterviewer 
            ? "Great choice! Let's start capturing your memories."
            : "Choose your interviewer above to begin your journey"}
        </p>
        <button
          onClick={handleBeginStory}
          className={`
            px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2
            ${selectedInterviewer 
              ? 'bg-legacy-600 text-white hover:bg-legacy-700' 
              : 'bg-gray-200 text-gray-600 cursor-not-allowed'}
          `}
        >
          Begin Your Story
          <Book className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}
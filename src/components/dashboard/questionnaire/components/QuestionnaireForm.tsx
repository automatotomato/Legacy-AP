import React from 'react';
import { useQuestionnaire } from '../context/QuestionnaireContext';
import QuestionnaireNav from './QuestionnaireNav';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuestionnaireForm() {
  const { currentSection, ActiveForm } = useQuestionnaire();

  return (
    <div className="bg-white shadow-sm w-full">
      <QuestionnaireNav />
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full"
          >
            <ActiveForm />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
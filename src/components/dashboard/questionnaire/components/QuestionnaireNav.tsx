import React from 'react';
import { useQuestionnaire } from '../context/QuestionnaireContext';
import { motion } from 'framer-motion';

export default function QuestionnaireNav() {
  const { currentSection, sections, setCurrentSection } = useQuestionnaire();

  return (
    <div className="border-b border-gray-200">
      <div className="max-w-full overflow-x-auto scrollbar-hide">
        <nav className="flex whitespace-nowrap min-w-full">
          {sections.map((section) => {
            const isCurrent = currentSection === section;

            return (
              <button
                key={section}
                onClick={() => setCurrentSection(section)}
                className={`relative min-w-[100px] px-3 py-2 text-sm font-medium 
                           text-center flex-1 ${isCurrent ? 'text-emerald-600' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <span className="block truncate">{section}</span>
                {isCurrent && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
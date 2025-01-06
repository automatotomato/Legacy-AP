import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { guideSteps } from '../../data/guideSteps';
import GuideSlide from './overview/GuideSlide';
import HelpSection from './overview/HelpSection';

export default function Overview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === guideSteps.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? guideSteps.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-4">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100">
          <div 
            className="h-full bg-legacy-600 transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / guideSteps.length) * 100}%` }}
          />
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col md:flex-row gap-6"
            >
              <GuideSlide
                {...guideSteps[currentSlide]}
                currentStep={currentSlide + 1}
                totalSteps={guideSteps.length}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 text-gray-600 hover:text-legacy-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous Step
            </button>
            <div className="flex gap-2">
              {guideSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-legacy-600 w-4' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            {currentSlide === guideSteps.length - 1 ? (
              <button
                onClick={() => window.location.href = '/dashboard/questionnaire'}
                className="flex items-center gap-2 px-4 py-2 bg-legacy-600 text-white 
                         rounded-lg hover:bg-legacy-700"
              >
                Begin Journey
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={nextSlide}
                className="flex items-center gap-2 text-gray-600 hover:text-legacy-600"
              >
                Next Step
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <HelpSection />
    </div>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Book, Phone, Gift, Star } from 'lucide-react';
import WelcomeSlide from './WelcomeSlide';

interface WelcomeSlideshowProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Book,
    title: "Welcome to Your Legacy Journey",
    description: "We're excited to help you preserve your life story in a beautiful, professionally crafted memoir. Let's walk through how it works.",
    tips: [
      "Professional memoir creation",
      "Guided interviews",
      "Beautiful hardcover book",
      "Family collaboration"
    ]
  },
  {
    icon: Phone,
    title: "Simple Phone Interviews",
    description: "Share your story through comfortable phone conversations with our expert interviewers. No technical skills needed!",
    tips: [
      "5 one-hour sessions",
      "Professional interviewers",
      "Flexible scheduling",
      "Guided conversations"
    ]
  },
  {
    icon: Gift,
    title: "Your Story, Beautifully Preserved",
    description: "We transform your memories into a professionally written and designed memoir that your family will treasure forever.",
    tips: [
      "Professional editing",
      "Photo integration",
      "Hardcover book",
      "Digital copy included"
    ]
  },
  {
    icon: Star,
    title: "Ready to Begin?",
    description: "Your dashboard is set up and ready. Let's start capturing your memories.",
    tips: [
      "Easy questionnaires",
      "Photo uploads",
      "Progress tracking",
      "Family sharing"
    ]
  }
];

export default function WelcomeSlideshow({ onComplete }: WelcomeSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      onComplete();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
        <div className="relative">
          <AnimatePresence mode="wait">
            <WelcomeSlide
              key={currentSlide}
              {...slides[currentSlide]}
              currentStep={currentSlide + 1}
              totalSteps={slides.length}
            />
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className={`flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors
                       ${currentSlide === 0 ? 'invisible' : ''}`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                    ${index === currentSlide ? 'bg-emerald-600 w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg 
                       hover:bg-emerald-700 transition-colors"
            >
              {currentSlide === slides.length - 1 ? 'Start Journey' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
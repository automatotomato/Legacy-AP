import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex((current) => {
      if (direction === 'prev') {
        return current === 0 ? testimonials.length - 1 : current - 1;
      }
      return current === testimonials.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <div className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Real stories from families preserving their legacy"
        />
        
        <div className="relative mt-12">
          <div className="absolute inset-0 flex items-center justify-between z-10">
            <button 
              onClick={() => navigate('prev')}
              className="p-2 rounded-full bg-white shadow-lg text-emerald-600 hover:text-emerald-700 
                       transition-colors transform -translate-x-4"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => navigate('next')}
              className="p-2 rounded-full bg-white shadow-lg text-emerald-600 hover:text-emerald-700 
                       transition-colors transform translate-x-4"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -left-2 bg-emerald-100 rounded-full p-2">
                    <Quote className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-emerald-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                          ${index === currentIndex ? 'bg-emerald-600 w-4' : 'bg-emerald-200'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
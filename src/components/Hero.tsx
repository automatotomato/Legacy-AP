import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from 'typewriter-effect';
import ScrollReveal from './ScrollReveal';
import { familyImages } from './images/constants';
import HeroImages from './hero/HeroImages';

export default function Hero() {
  const scrollToProduct = () => {
    const productSection = document.getElementById('product-showcase');
    productSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${familyImages.hero.background})` }}
        />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Leave behind the most meaningful gift of all—
            <div className="text-emerald-600 inline-block">
              <TypeWriter
                options={{
                  strings: ['your story.', 'your legacy.', 'your memories.'],
                  autoStart: true,
                  loop: true,
                  cursor: '|',
                  delay: 75,
                  deleteSpeed: 50
                }}
              />
            </div>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We make it simple to turn your life's journey into a beautifully crafted memoir—using the power of AI to preserve your legacy for generations to come.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <motion.button 
            onClick={scrollToProduct}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-lg 
                     text-base sm:text-lg font-semibold shadow-lg hover:bg-emerald-700 
                     transform transition-all duration-200 ease-in-out"
          >
            Turn Your Story Into a Legacy
          </motion.button>
        </ScrollReveal>

        <div className="mt-12 sm:mt-16">
          <HeroImages />
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from 'typewriter-effect';
import ScrollReveal from '../ScrollReveal';

interface HeroContentProps {
  onGetStarted: () => void;
}

export default function HeroContent({ onGetStarted }: HeroContentProps) {
  return (
    <>
      <ScrollReveal>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Leave behind the most meaningful gift of all—
          <span className="text-emerald-600">
            <TypeWriter
              options={{
                strings: ['your story.', 'your legacy.', 'your memories.'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We make it simple to turn your life's journey into a beautifully crafted memoir—using the power of AI to preserve your legacy for generations to come.
        </p>
      </ScrollReveal>
      
      <ScrollReveal delay={0.4}>
        <motion.button 
          onClick={onGetStarted}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-emerald-600 text-white rounded-lg text-lg font-semibold 
                   shadow-lg hover:bg-emerald-700 transform transition-all
                   duration-200 ease-in-out"
        >
          Turn Your Story Into a Legacy
        </motion.button>
      </ScrollReveal>
    </>
  );
}
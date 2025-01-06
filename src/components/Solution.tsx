import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

export default function Solution() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle 
          title="The Legacy Solution" 
          subtitle="Your story, preserved with care and expertise"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg mx-auto"
        >
          <p className="text-xl text-gray-600 mb-8">
            We understand that every life story is unique and precious. Our expert interviewers 
            and AI-powered system work together to capture the essence of your journey, preserving 
            your memories, wisdom, and voice for generations to come.
          </p>
          
          <p className="text-xl text-gray-600 mb-8">
            Through a series of thoughtfully guided conversations, we help you uncover and share 
            the moments that matter most. Our process is designed to make storytelling effortless, 
            ensuring no important detail is left behind.
          </p>
          
          <p className="text-xl text-gray-600">
            The result? A beautifully crafted memoir that captures your authentic voice and 
            preserves your legacy in a way that will resonate with your family for generations 
            to come. Don't let your story fade away—let us help you create a lasting legacy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
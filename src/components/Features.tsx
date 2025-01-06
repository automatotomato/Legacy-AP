import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/features';
import SectionTitle from './SectionTitle';

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Why Choose Legacy?" 
          subtitle="Experience the difference of professional memoir creation"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-xl
                         hover:shadow-xl transition-shadow duration-300 ease-in-out
                         bg-gradient-to-b from-white to-emerald-50"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-emerald-100 rounded-full blur opacity-30"></div>
                <feature.icon className="relative w-12 h-12 text-emerald-600 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
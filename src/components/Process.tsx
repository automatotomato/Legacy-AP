import React from 'react';
import { Phone, Pencil, Upload, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const steps = [
  {
    icon: Phone,
    title: "Personal Phone Interviews",
    description: "Share your story through comfortable phone conversations with our expert interviewers, available 24/7 to capture your memories at your convenience."
  },
  {
    icon: Upload,
    title: "Photo Integration",
    description: "Upload cherished photos through your personal dashboard to bring your stories to life visually."
  },
  {
    icon: Users,
    title: "Family Collaboration",
    description: "Invite family members to contribute memories, photos, and review progress through our collaborative platform."
  },
  {
    icon: Pencil,
    title: "Professional Editing",
    description: "Our team transforms your interviews into a beautifully crafted memoir that captures your authentic voice."
  },
  {
    icon: Clock,
    title: "Track Progress",
    description: "Monitor your memoir's development after each session through your dashboard, ensuring your story unfolds exactly as you envision."
  }
];

export default function Process() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="How Your Story Becomes a Legacy" 
          subtitle="A simple, guided journey to preserve your memories forever"
        />
        
        <div className="mt-16 relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-100 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white 
                              w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon Circle */}
                <div className="relative w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
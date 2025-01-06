import React from 'react';
import { Pencil, Sparkles, Heart } from 'lucide-react';
import SectionTitle from './SectionTitle';

const steps = [
  {
    icon: Pencil,
    title: "Get Started",
    description: "Take the first step by starting your story today—simple, quick, and the easiest way to preserve your legacy."
  },
  {
    icon: Sparkles,
    title: "We Do the Work",
    description: "Our guided AI process helps you effortlessly organize your memories and turn them into a beautifully crafted memoir, stress-free."
  },
  {
    icon: Heart,
    title: "Enjoy Your Legacy",
    description: "Hold your story in your hands and share it with loved ones—creating a timeless gift that brings pride, connection, and joy."
  }
];

export default function Steps() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Your Journey to a Lasting Legacy" 
          subtitle="Three simple steps to preserve your story for generations"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-emerald-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
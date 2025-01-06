import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Clock, Gift, Shield } from 'lucide-react';
import { DemoFormData } from './demo/DemoFormTypes';
import { demoQuestions } from '../data/demoQuestions';

interface DemoFormProps {
  onSuccess?: () => void;
}

export default function DemoForm({ onSuccess }: DemoFormProps) {
  const [formData, setFormData] = useState<Partial<DemoFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: keyof DemoFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          childhood_memory: formData.childhoodMemory,
          family_tradition: formData.familyTradition,
          future_legacy: formData.futureLegacy
        }]);

      if (error) throw error;

      setFormData({});
      onSuccess?.();
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Your Legacy Journey Today
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get a free 5-minute demo interview with our expert storyteller and receive $15 off your memoir package
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-full">
              <Clock className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-gray-700">5-minute demo call</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-full">
              <Gift className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-gray-700">$15 off your memoir</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-full">
              <Shield className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-gray-700">No obligation</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-gray-600">
            Trusted by over 10,000 families
          </span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name || ''}
                onChange={(e) => handleFieldChange('name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email || ''}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone || ''}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="text-sm font-medium text-emerald-800 mb-4">
              Share a few memories to help your interviewer prepare for your demo:
            </h3>
            <div className="space-y-4">
              {demoQuestions.map((question) => (
                <div key={question.id}>
                  <label htmlFor={question.id} className="block text-sm font-medium text-gray-700">
                    {question.question}
                  </label>
                  <textarea
                    id={question.id}
                    value={formData[question.id as keyof DemoFormData] || ''}
                    onChange={(e) => handleFieldChange(question.id as keyof DemoFormData, e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    rows={3}
                    required
                    placeholder={question.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold
                     shadow-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Get Your Demo Interview Number'}
          </button>

          {formData.name && (
            <div className="text-center text-sm text-gray-600">
              Thank you, {formData.name}! Submit your memories to receive your demo interview number.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
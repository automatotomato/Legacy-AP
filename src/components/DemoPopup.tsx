import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { DemoFormData } from './demo/DemoFormTypes';
import { demoQuestions } from '../data/demoQuestions';
import ContactForm from './demo/ContactForm';
import QuestionSlide from './demo/QuestionSlide';
import SuccessMessage from './demo/SuccessMessage';

type Step = 'contact' | 'questions' | 'success';

export default function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>('contact');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    phone: '',
    childhoodMemory: '',
    familyTradition: '',
    futureLegacy: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (field: keyof DemoFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactNext = () => {
    setCurrentStep('questions');
  };

  const handleQuestionNext = async () => {
    if (questionIndex < demoQuestions.length - 1) {
      setQuestionIndex(prev => prev + 1);
    } else {
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
        setCurrentStep('success');
      } catch (error) {
        alert('Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  const currentQuestion = demoQuestions[questionIndex];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 shadow-2xl"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4">
              <Phone className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Get Your Free Interview Session Now
            </h2>
            <p className="text-gray-600">
              Share a few memories to help your interviewer prepare for your personalized demo session.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-emerald-600">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Your interviewer is ready now!</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 'contact' && (
              <ContactForm
                data={formData}
                onChange={handleChange}
                onNext={handleContactNext}
              />
            )}

            {currentStep === 'questions' && (
              <QuestionSlide
                question={currentQuestion.question}
                placeholder={currentQuestion.placeholder}
                value={formData[currentQuestion.id as keyof DemoFormData] || ''}
                onChange={(value) => handleChange(currentQuestion.id as keyof DemoFormData, value)}
                onNext={handleQuestionNext}
                currentStep={questionIndex + 1}
                totalSteps={demoQuestions.length}
              />
            )}

            {currentStep === 'success' && <SuccessMessage />}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
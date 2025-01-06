import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from './SectionTitle';

const faqs = [
  {
    question: "How long does the memoir creation process take?",
    answer: "The typical process takes 4-6 weeks from your first interview to receiving your finished memoir. We've designed our process to be efficient while ensuring every detail of your story is captured beautifully."
  },
  {
    question: "What if I'm not a good storyteller?",
    answer: "That's exactly why we're here! Our expert interviewers and AI technology guide you through the process, asking the right questions to bring out the most meaningful aspects of your story. You just need to share your memories—we'll handle the rest."
  },
  {
    question: "How much does it cost?",
    answer: "Our standard package starts at $1,499, which includes three interview sessions, professional editing, and a beautifully bound hardcover memoir. We also offer premium packages with additional features like audio recordings and extra copies. Contact us for a detailed pricing breakdown."
  },
  {
    question: "What makes your service different from other memoir services?",
    answer: "We combine personal attention with cutting-edge AI technology to create truly unique memoirs. Our process preserves your authentic voice while ensuring professional quality. Plus, our interviewers are trained to help you recall and articulate memories you might have forgotten."
  },
  {
    question: "Can I include photos in my memoir?",
    answer: "Absolutely! Our standard package includes up to 20 photos, professionally restored and integrated throughout your memoir. Additional photos can be included for a small fee."
  },
  {
    question: "What if I need to make changes after the memoir is written?",
    answer: "We include one round of revisions in every package to ensure you're completely satisfied with your memoir. Additional revision rounds are available if needed."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about creating your legacy"
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-emerald-600 transform transition-transform duration-200
                             ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Book, Star, Gift, Shield, Lock, Users, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AuthModal from './auth/AuthModal';
import { useNavigate } from 'react-router-dom';

export default function ProductShowcase() {
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const coreFeatures = [
    '5 one-hour personal interview sessions',
    '300-page hardcover memoir',
    'Up to 30 high-quality photos',
    '24/7 professional interviewer access',
    'Family collaboration portal',
    'Digital backup of all content',
    'Professional editing & design',
    'Unlimited revisions'
  ];

  const availableUpgrades = [
    {
      icon: Phone,
      title: 'Extended Sessions',
      description: 'Add more interview time for a deeper story'
    },
    {
      icon: Book,
      title: 'Audio Book',
      description: 'Your memoir professionally narrated'
    },
    {
      icon: Star,
      title: 'Digital Edition',
      description: 'eBook version for easy sharing'
    },
    {
      icon: Gift,
      title: 'Premium Materials',
      description: 'Leather binding and archival paper'
    }
  ];

  return (
    <div id="product-showcase" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Preserve Your Legacy for Generations to Come
            </h2>
            <p className="text-xl text-gray-600">
              Don't let your precious memories and life lessons fade away. Give your family the priceless gift of your story, beautifully preserved forever.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
              <div className="bg-emerald-600 px-6 py-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Legacy Memoir Package</h3>
                <div className="text-emerald-100 text-lg mb-4">Your complete journey to a timeless memoir</div>
                <div className="text-4xl font-bold text-white">
                  <span className="text-2xl">$</span>99
                </div>
                <p className="text-emerald-100 mt-2">One-time investment in your family's legacy</p>
              </div>

              <div className="p-8">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
                      <Star className="w-5 h-5 text-emerald-600" />
                      Everything You Need to Tell Your Story
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {coreFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-emerald-600" />
                      Optional Enhancements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableUpgrades.map((upgrade, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
                          <upgrade.icon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                          <div>
                            <h5 className="font-medium text-gray-900">{upgrade.title}</h5>
                            <p className="text-sm text-gray-600">{upgrade.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Why Your Story Matters</h4>
                    <p className="text-gray-600">
                      Every life holds wisdom, love, and lessons that deserve to be preserved. Don't let your precious memories fade away—give your children and grandchildren the gift of your story, told in your own words.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        Lifetime guarantee
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-emerald-600" />
                        Secure process
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-600" />
                        Family support
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowSignup(true)}
                    className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold 
                             shadow-lg hover:bg-emerald-700 transition-colors"
                  >
                    Begin Your Legacy Journey
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <AuthModal 
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        onSuccess={() => navigate('/dashboard')}
        showSignupOption={true}
      />
    </div>
  );
}
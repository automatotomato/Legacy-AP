import React from 'react';
import { Crown, Book, Mic, Camera, Clock, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const upgrades = [
  {
    id: 'additional-sessions',
    title: 'Additional Interview Sessions',
    description: 'Add more personal interview sessions to capture every detail of your story',
    price: 49,
    icon: Mic,
    features: [
      '1-hour session with expert interviewer',
      'Professional transcription',
      'Topic of your choice',
      'Flexible scheduling'
    ]
  },
  {
    id: 'premium-book',
    title: 'Premium Hardcover Edition',
    description: 'Upgrade to a luxurious leather-bound hardcover with premium paper',
    price: 149,
    icon: Book,
    features: [
      'Genuine leather binding',
      'Archival-quality paper',
      'Gold foil stamping',
      'Presentation box included'
    ]
  },
  {
    id: 'photo-package',
    title: 'Extended Photo Package',
    description: 'Include more photos and get professional restoration services',
    price: 99,
    icon: Camera,
    features: [
      'Up to 50 additional photos',
      'Professional photo restoration',
      'High-resolution scanning',
      'Custom photo layout'
    ]
  },
  {
    id: 'rush-delivery',
    title: 'Rush Delivery',
    description: 'Get your completed memoir in just 2-3 weeks',
    price: 199,
    icon: Clock,
    features: [
      'Priority processing',
      'Expedited editing',
      'Fast-track production',
      'Express shipping'
    ]
  },
  {
    id: 'family-portal',
    title: 'Family Collaboration Plus',
    description: 'Enhanced features for family participation',
    price: 79,
    icon: Users,
    features: [
      'Multiple family member access',
      'Group contribution tools',
      'Shared photo albums',
      'Family timeline feature'
    ]
  },
  {
    id: 'premium-package',
    title: 'Premium All-Access Package',
    description: 'Get all premium features at a discounted price',
    price: 399,
    icon: Crown,
    features: [
      'All individual upgrades included',
      'Priority support',
      'Lifetime updates',
      'Exclusive features'
    ]
  }
];

export default function UpgradesSection() {
  const handleUpgrade = (upgradeId: string) => {
    // TODO: Implement upgrade purchase flow
    console.log(`Upgrading to ${upgradeId}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Premium Upgrades</h2>
        <p className="mt-1 text-gray-600">
          Enhance your memoir with these premium features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upgrades.map((upgrade) => (
          <motion.div
            key={upgrade.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <upgrade.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {upgrade.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">
                {upgrade.description}
              </p>

              <ul className="space-y-2 mb-6">
                {upgrade.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  ${upgrade.price}
                </div>
                <button
                  onClick={() => handleUpgrade(upgrade.id)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg 
                           hover:bg-emerald-700 transition-colors"
                >
                  Upgrade Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
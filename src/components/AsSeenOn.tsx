import React from 'react';
import ScrollReveal from './ScrollReveal';

const pressLogos = [
  {
    name: 'The New York Times',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png',
    height: 'h-8'
  },
  {
    name: 'Forbes',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Forbes_logo.svg',
    height: 'h-6'
  },
  {
    name: 'The Wall Street Journal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/WSJ_Logo.svg',
    height: 'h-8'
  },
  {
    name: 'Bloomberg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Bloomberg_Business_Logo.svg',
    height: 'h-6'
  },
  {
    name: 'Fast Company',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Fast_Company_logo.svg',
    height: 'h-6'
  }
];

export default function AsSeenOn() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            As Featured In
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center justify-items-center">
            {pressLogos.map((logo) => (
              <div key={logo.name} className="flex justify-center">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className={`${logo.height} w-auto object-contain filter grayscale opacity-50 hover:opacity-75 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
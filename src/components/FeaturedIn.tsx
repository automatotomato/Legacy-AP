import React from 'react';

export default function FeaturedIn() {
  return (
    <div className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">As featured in</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <img 
            src="https://logowik.com/content/uploads/images/cnn-new3324.logowik.com.webp"
            alt="CNN"
            className="h-8 object-contain opacity-50 grayscale hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://logowik.com/content/uploads/images/forbes3327.logowik.com.webp"
            alt="Forbes"
            className="h-8 object-contain opacity-50 grayscale hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://logowik.com/content/uploads/images/techcrunch2076.logowik.com.webp"
            alt="TechCrunch"
            className="h-6 object-contain opacity-50 grayscale hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://logowik.com/content/uploads/images/usa-today6553.logowik.com.webp"
            alt="USA Today"
            className="h-8 object-contain opacity-50 grayscale hover:opacity-75 transition-opacity"
          />
          <img 
            src="https://logowik.com/content/uploads/images/yahoo-new6982.logowik.com.webp"
            alt="Yahoo"
            className="h-8 object-contain opacity-50 grayscale hover:opacity-75 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
}
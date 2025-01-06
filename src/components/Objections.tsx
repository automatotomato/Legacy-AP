import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Objections() {
  // ... existing state

  return (
    <div className="py-24 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Common Questions" 
          subtitle="Everything you need to know about preserving your legacy"
        />
        
        <div className="space-y-4">
          {/* ... existing objections code */}
        </div>
      </div>
    </div>
  );
}
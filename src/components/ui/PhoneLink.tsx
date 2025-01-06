import React from 'react';
import { Phone } from 'lucide-react';

interface PhoneLinkProps {
  className?: string;
  showIcon?: boolean;
}

export default function PhoneLink({ className = '', showIcon = true }: PhoneLinkProps) {
  return (
    <a 
      href="tel:+17073836842"
      className={`inline-flex items-center gap-2 hover:text-emerald-700 transition-colors ${className}`}
    >
      {showIcon && <Phone className="w-5 h-5" />}
      (707) 383-6842
    </a>
  );
}
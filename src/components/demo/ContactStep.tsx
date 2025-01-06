import React from 'react';
import { DemoFormData } from './DemoFormTypes';

interface ContactStepProps {
  data: Partial<DemoFormData>;
  onChange: (field: keyof DemoFormData, value: string) => void;
  onNext: () => void;
}

export default function ContactStep({ data, onChange, onNext }: ContactStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.name && data.email && data.phone) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={data.name || ''}
          onChange={(e) => onChange('name', e.target.value)}
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
          value={data.email || ''}
          onChange={(e) => onChange('email', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={data.phone || ''}
          onChange={(e) => onChange('phone', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold
                 shadow-lg hover:bg-emerald-700 transition-colors"
      >
        Continue
      </button>
    </form>
  );
}
import React from 'react';
import { DemoFormData } from './DemoFormTypes';

interface DemoFormProps {
  data: DemoFormData;
  onChange: (field: keyof DemoFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export default function DemoForm({ data, onChange, onSubmit, isSubmitting }: DemoFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={data.name}
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
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
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
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            required
          />
        </div>
      </div>

      <div className="bg-emerald-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-emerald-800 mb-2">
          Share a few memories to help your interviewer prepare for your demo:
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="childhoodMemory" className="block text-sm font-medium text-gray-700">
              Share a cherished childhood memory
            </label>
            <textarea
              id="childhoodMemory"
              value={data.childhoodMemory}
              onChange={(e) => onChange('childhoodMemory', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              rows={2}
              required
              placeholder="A special moment that brings back fond memories..."
            />
          </div>

          <div>
            <label htmlFor="familyTradition" className="block text-sm font-medium text-gray-700">
              What's your favorite family tradition?
            </label>
            <textarea
              id="familyTradition"
              value={data.familyTradition}
              onChange={(e) => onChange('familyTradition', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              rows={2}
              required
              placeholder="A tradition that brings your family together..."
            />
          </div>

          <div>
            <label htmlFor="futureLegacy" className="block text-sm font-medium text-gray-700">
              What would you like your grandchildren to know about you?
            </label>
            <textarea
              id="futureLegacy"
              value={data.futureLegacy}
              onChange={(e) => onChange('futureLegacy', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              rows={2}
              required
              placeholder="Share something meaningful you'd like to pass down..."
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-emerald-600 text-white rounded-lg font-semibold
                 shadow-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Get Your Demo Interview Number'}
      </button>
    </form>
  );
}
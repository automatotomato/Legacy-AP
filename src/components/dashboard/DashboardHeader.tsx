import React from 'react';
import Logo from '../ui/Logo';

export default function DashboardHeader() {
  return (
    <div className="border-b">
      <div className="h-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <Logo className="text-xl" />
        </div>
        <div className="hidden lg:block text-lg font-semibold text-gray-900">
          Legacy Dashboard
        </div>
      </div>
    </div>
  );
}
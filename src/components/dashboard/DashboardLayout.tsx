import React from 'react';
import { useAuth } from '../../lib/AuthContext';
import { Outlet, useLocation } from 'react-router-dom';
import WelcomeSlideshow from '../onboarding/WelcomeSlideshow';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import DashboardProgress from './DashboardProgress';
import WelcomeSection from './overview/WelcomeSection';

export default function DashboardLayout() {
  const { user, isNewUser, setIsNewUser } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Required</h2>
          <p className="text-gray-600">Please sign in to access your dashboard.</p>
        </div>
      </div>
    );
  }

  // Show welcome slideshow for new users
  if (isNewUser) {
    return <WelcomeSlideshow onComplete={() => setIsNewUser(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 bg-white">
          <DashboardHeader />
          <DashboardProgress />
        </div>
        <main className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            {location.pathname === '/dashboard' ? (
              <WelcomeSection />
            ) : (
              <Outlet />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
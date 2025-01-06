import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Save the attempted URL for redirecting after login
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
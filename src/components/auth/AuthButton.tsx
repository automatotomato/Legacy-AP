import React from 'react';
import { useAuth } from '../../lib/AuthContext';

interface AuthButtonProps {
  onAuthClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function AuthButton({ onAuthClick, className = '', children }: AuthButtonProps) {
  const { user } = useAuth();

  const handleClick = () => {
    onAuthClick();
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
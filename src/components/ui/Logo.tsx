import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  asLink?: boolean;
}

export default function Logo({ className = '', asLink = true }: LogoProps) {
  const content = (
    <span className={`text-2xl font-bold text-emerald-600 ${className}`}>
      Legacy
    </span>
  );

  if (asLink) {
    return <Link to="/">{content}</Link>;
  }

  return content;
}
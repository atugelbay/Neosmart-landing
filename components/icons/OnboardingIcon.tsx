import React from 'react';

const OnboardingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M12 12v4" />
    <path d="M21 12h-2" />
    <path d="M5 12H3" />
    <path d="M12 8v-2" />
  </svg>
);

export default OnboardingIcon;

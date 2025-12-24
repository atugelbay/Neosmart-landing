import React from 'react';

const SetupIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-4.44a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.38" />
    <path d="M18 2l4 4" />
    <path d="M15 5h5" />
    <path d="M15 12h5" />
    <path d="M15 17h5" />
    <path d="M9 8h1" />
    <path d="M9 13h1" />
    <path d="M9 18h1" />
  </svg>
);

export default SetupIcon;

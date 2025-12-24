import React from 'react';

const DemoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="M12 18a10 10 0 0 0 5-8.5" />
    <path d="M12 18a10 10 0 0 1-5-8.5" />
    <path d="M7 10h10" />
  </svg>
);

export default DemoIcon;

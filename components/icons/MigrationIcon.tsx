import React from 'react';

const MigrationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 16.5V3" />
    <path d="m15 13.5-3 3-3-3" />
    <path d="M10 21h4" />
    <path d="M18 21h1a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-1" />
    <path d="M6 21H5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2h1" />
  </svg>
);

export default MigrationIcon;

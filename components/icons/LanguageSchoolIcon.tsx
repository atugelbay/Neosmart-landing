import React from 'react';

const LanguageSchoolIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5h4" />
    <path d="M5 3v2" />
    <path d="M3 11h5" />
    <path d="M4 9v2" />
    <path d="M11 15h7" />
    <path d="M12 13v2" />
    <path d="M18 17a3 3 0 0 1-3-3V5a3 3 0 0 1 6 0v9a3 3 0 0 1-3 3Z" />
  </svg>
);

export default LanguageSchoolIcon;

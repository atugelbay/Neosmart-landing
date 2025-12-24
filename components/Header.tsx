import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0F1A]/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center space-x-2">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#5B7CFF"/>
             <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="#7CF2C2"/>
             <path d="M2 7L12 12V22L2 17V7Z" fill="#5B7CFF" fillOpacity="0.6"/>
             <path d="M22 7L12 12V22L22 17V7Z" fill="#7CF2C2" fillOpacity="0.6"/>
           </svg>
          <span className="text-xl font-bold text-white">Neosmart</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-[#A0A7B4]">
          <a href="#solutions" className="hover:text-white transition-colors">Решение</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Кому подходит</a>
          <a href="#growth" className="hover:text-white transition-colors">Рост</a>
          <a href="#pricing" className="hover:text-white transition-colors">Тарифы</a>
        </nav>
        <div className="flex items-center">
          <Button variant="secondary" className="px-4 py-2">Запросить демо</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

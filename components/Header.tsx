import React, { useState } from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F1A]/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-3 md:py-4">
        <div className="flex justify-between items-center border-b border-white/10 pb-3 md:pb-4">
          <div className="flex items-center space-x-2 flex-shrink-0">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
               <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#5B7CFF"/>
               <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="#7CF2C2"/>
               <path d="M2 7L12 12V22L2 17V7Z" fill="#5B7CFF" fillOpacity="0.6"/>
               <path d="M22 7L12 12V22L22 17V7Z" fill="#7CF2C2" fillOpacity="0.6"/>
             </svg>
            <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">Neosmart</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[#A0A7B4]">
            <a href="#solutions" className="hover:text-white transition-colors whitespace-nowrap">Решение</a>
            <a href="#use-cases" className="hover:text-white transition-colors whitespace-nowrap">Кому подходит</a>
            <a href="#growth" className="hover:text-white transition-colors whitespace-nowrap">Рост</a>
            <a href="#pricing" className="hover:text-white transition-colors whitespace-nowrap">Тарифы</a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center flex-shrink-0 ml-4">
            <Button variant="secondary" className="px-4 py-2 whitespace-nowrap">Запросить демо</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#A0A7B4] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 space-y-4 border-t border-white/10 mt-3">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#solutions" 
                onClick={closeMenu}
                className="text-[#A0A7B4] hover:text-white transition-colors py-2"
              >
                Решение
              </a>
              <a 
                href="#use-cases" 
                onClick={closeMenu}
                className="text-[#A0A7B4] hover:text-white transition-colors py-2"
              >
                Кому подходит
              </a>
              <a 
                href="#growth" 
                onClick={closeMenu}
                className="text-[#A0A7B4] hover:text-white transition-colors py-2"
              >
                Рост
              </a>
              <a 
                href="#pricing" 
                onClick={closeMenu}
                className="text-[#A0A7B4] hover:text-white transition-colors py-2"
              >
                Тарифы
              </a>
            </nav>
            <div className="pt-2">
              <Button variant="secondary" className="w-full" onClick={closeMenu}>
                Запросить демо
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

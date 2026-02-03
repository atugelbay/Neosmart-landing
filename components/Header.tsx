import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useModal } from '../App';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-3 md:py-4">
        <div className="flex justify-between items-center pb-3 md:pb-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo/logo.png" alt="Neosmart" className="h-7 sm:h-8 w-auto" />
            <span className="text-lg sm:text-xl font-bold text-white">Neosmart</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[#A0A7B4]">
            <a href="#solutions" className="hover:text-white transition-colors whitespace-nowrap">Решение</a>
            <a href="#use-cases" className="hover:text-white transition-colors whitespace-nowrap">Кому подходит</a>
            <a href="#pricing" className="hover:text-white transition-colors whitespace-nowrap">Тарифы</a>
            <Link to="/guides" className="hover:text-white transition-colors whitespace-nowrap flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Гайды
            </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center flex-shrink-0 ml-4">
            <Button variant="secondary" className="px-4 py-2 whitespace-nowrap" onClick={openModal}>Запросить звонок</Button>
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
          <div className="md:hidden pt-4 pb-4 space-y-4 mt-3">
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
                href="#pricing" 
                onClick={closeMenu}
                className="text-[#A0A7B4] hover:text-white transition-colors py-2"
              >
                Тарифы
              </a>
              <Link 
                to="/guides" 
                onClick={closeMenu}
                className="text-[#A0A7B4] hover:text-white transition-colors py-2 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Видео-гайды
              </Link>
            </nav>
            <div className="pt-2">
              <Button variant="secondary" className="w-full" onClick={() => { closeMenu(); openModal(); }}>
                Запросить звонок
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

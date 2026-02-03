import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-1 text-center">
          <p className="text-[#A0A7B4] text-sm">
            &copy; {new Date().getFullYear()}, Neosmart. Все права на материалы данного сайта защищены.
          </p>
          <Link 
            to="/privacy" 
            className="text-[#7CF2C2] hover:text-white transition-colors text-sm"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    'Продукт': ['Возможности', 'Цены', 'Интеграции', 'Обновления'],
    'Компания': ['О нас', 'Карьера', 'Контакты', 'Блог'],
    'Документы': ['Политика конфиденциальности', 'Условия использования', 'Безопасность']
  };

  return (
    <footer className="bg-[#0B0F1A] border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#5B7CFF"/>
                <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="#7CF2C2"/>
                <path d="M2 7L12 12V22L2 17V7Z" fill="#5B7CFF" fillOpacity="0.6"/>
                <path d="M22 7L12 12V22L22 17V7Z" fill="#7CF2C2" fillOpacity="0.6"/>
              </svg>
              <span className="text-xl font-bold text-white">Neosmart</span>
            </div>
            <p className="mt-4 text-[#A0A7B4] max-w-xs">Управляйте учебным центром, а не хаосом.</p>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}><a href="#" className="text-[#A0A7B4] hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-[#A0A7B4]">
          <p>&copy; {new Date().getFullYear()} Neosmart Inc. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

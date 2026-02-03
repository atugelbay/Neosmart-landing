import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'neosmart_preloader_seen';

/**
 * Прелоадер: полноэкранный оверлей с CSS-лоадером (круг + шестиугольник).
 * Цвета под лого (синий, мятный, фиолетовый). Длительность 1 с, без кнопки.
 */
const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const forceShow =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('preloader') === '1';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (forceShow) return;
    if (sessionStorage.getItem(STORAGE_KEY) === '1') {
      setVisible(false);
      return;
    }
  }, [forceShow]);

  const finish = () => {
    if (!forceShow) sessionStorage.setItem(STORAGE_KEY, '1');
    setFadeOut(true);
    setTimeout(() => setVisible(false), 500);
  };

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(finish, 1000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0F1A] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="preloader-loader" />
      <style>{`
        .preloader-loader {
          width: 60px;
          aspect-ratio: .5;
          display: grid;
        }
        .preloader-loader:before {
          content: "";
          width: 30%;
          aspect-ratio: 1;
          border-radius: 50%;
          margin: auto auto 0;
          background: radial-gradient(circle at 30% 30%, #7CF2C2, #5B7CFF 50%, #8B5CF6);
          animation: preloader-l9-0 .5s cubic-bezier(0,800,1,800) infinite;
        }
        .preloader-loader:after {
          content: "";
          width: 100%;
          aspect-ratio: 1/cos(30deg);
          margin: 0 auto auto;
          clip-path: polygon(50% -50%,100% 50%,50% 150%,0 50%);
          background: linear-gradient(135deg, #5B7CFF 0%, #8B5CF6 50%, #7CF2C2 100%);
          animation: preloader-l9-1 .5s linear infinite;
        }
        @keyframes preloader-l9-0 {
          0%,2%  {translate: 0   0%}
          98%,to {translate: 0 -.2%}
        }
        @keyframes preloader-l9-1 {
          0%,5%  {rotate:  0deg}
          95%,to {rotate:-60deg}
        }
      `}</style>
    </div>
  );
};

export default Preloader;

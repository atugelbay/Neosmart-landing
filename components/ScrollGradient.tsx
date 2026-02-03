import React, { useState, useEffect } from 'react';

/**
 * Один большой фон, привязанный к скроллу: сверху «небо» (синий), внизу «земля» (мятный).
 * Концепт как у Air: скролл = путь сверху вниз, фон меняется по мере прокрутки.
 */
const ScrollGradient: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(3000);

  useEffect(() => {
    const updateHeight = () => setDocHeight(document.documentElement.scrollHeight);
    updateHeight();
    const t = setTimeout(updateHeight, 500);
    window.addEventListener('resize', updateHeight);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Один градиент на всю высоту страницы: сверху «небо» (синий), внизу «земля» (мятный)
  const gradient = `
    linear-gradient(
      to bottom,
      #0B0F1A 0%,
      rgba(91, 124, 255, 0.14) 6%,
      rgba(91, 124, 255, 0.1) 16%,
      rgba(139, 92, 246, 0.07) 32%,
      rgba(139, 92, 246, 0.04) 48%,
      rgba(124, 242, 194, 0.05) 65%,
      rgba(124, 242, 194, 0.12) 85%,
      rgba(124, 242, 194, 0.08) 94%,
      #0B0F1A 100%
    )
  `;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      aria-hidden
      style={{
        background: gradient,
        backgroundSize: `100% ${docHeight}px`,
        backgroundPosition: `0 ${-scrollY}px`,
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default ScrollGradient;

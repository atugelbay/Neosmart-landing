import React, { useState, useEffect } from 'react';

type GlowDef = {
  left?: string;
  right?: string;
  w: number;
  h: number;
  opacity: number;
  bg: string;
};

/**
 * Фон: mesh-градиент + мягкие блики/свечения с параллаксом при скролле.
 * Без гексагонов — только размытые пятна света в цветах бренда.
 */
const HexagonPattern: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxY = scrollY * 0.3;

  const rows: { top: string; glows: GlowDef[] }[] = [
    {
      top: '0vh',
      glows: [
        { left: '5%', w: 380, h: 320, opacity: 0.07, bg: 'radial-gradient(ellipse 70% 70% at center, #5B7CFF 0%, #8B5CF6 40%, transparent 70%)' },
        { right: '0%', left: undefined, w: 320, h: 380, opacity: 0.06, bg: 'radial-gradient(ellipse 60% 80% at center, #8B5CF6 0%, #7CF2C2 35%, transparent 70%)' },
      ],
    },
    {
      top: '85vh',
      glows: [
        { left: '40%', w: 360, h: 300, opacity: 0.055, bg: 'radial-gradient(ellipse 80% 60% at center, #7CF2C2 0%, #5B7CFF 45%, transparent 70%)' },
        { left: '10%', w: 300, h: 280, opacity: 0.05, bg: 'radial-gradient(ellipse 70% 70% at center, #8B5CF6 0%, rgba(236,72,153,0.4) 50%, transparent 70%)' },
      ],
    },
    {
      top: '170vh',
      glows: [
        { left: '55%', w: 400, h: 340, opacity: 0.058, bg: 'radial-gradient(ellipse 65% 75% at center, #5B7CFF 0%, #7CF2C2 45%, transparent 70%)' },
        { left: '0%', w: 340, h: 300, opacity: 0.052, bg: 'radial-gradient(ellipse 75% 65% at center, rgba(236,72,153,0.35) 0%, #8B5CF6 50%, transparent 70%)' },
      ],
    },
    {
      top: '255vh',
      glows: [
        { left: '25%', w: 320, h: 360, opacity: 0.053, bg: 'radial-gradient(ellipse 70% 70% at center, #5B7CFF 0%, #8B5CF6 40%, transparent 70%)' },
        { right: '8%', left: undefined, w: 360, h: 320, opacity: 0.05, bg: 'radial-gradient(ellipse 60% 80% at center, #7CF2C2 0%, #5B7CFF 50%, transparent 70%)' },
      ],
    },
    {
      top: '340vh',
      glows: [
        { left: '48%', w: 340, h: 320, opacity: 0.052, bg: 'radial-gradient(ellipse 70% 70% at center, #8B5CF6 0%, #7CF2C2 45%, transparent 70%)' },
        { left: '5%', w: 300, h: 280, opacity: 0.048, bg: 'radial-gradient(ellipse 75% 70% at center, #5B7CFF 0%, rgba(236,72,153,0.3) 45%, transparent 70%)' },
      ],
    },
    {
      top: '425vh',
      glows: [
        { left: '30%', w: 350, h: 300, opacity: 0.05, bg: 'radial-gradient(ellipse 70% 75% at center, #8B5CF6 0%, #5B7CFF 45%, transparent 70%)' },
        { right: '5%', left: undefined, w: 320, h: 360, opacity: 0.049, bg: 'radial-gradient(ellipse 65% 70% at center, #7CF2C2 0%, #8B5CF6 50%, transparent 70%)' },
      ],
    },
  ];

  return (
    <>
      {/* Mesh-градиент: мягкая подложка в цветах бренда */}
      <div
        className="absolute inset-0 opacity-90"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(91, 124, 255, 0.22) 0%, transparent 55%),
            radial-gradient(ellipse 60% 80% at 85% 30%, rgba(139, 92, 246, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 50% 85%, rgba(124, 242, 194, 0.15) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 75% 70%, rgba(91, 124, 255, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 90% 40% at 10% 60%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Лёгкое «дыхание» фона */}
      <div
        className="absolute inset-0 opacity-[0.7] animate-mesh-pulse"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 30% 40%, rgba(124, 242, 194, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 100% at 70% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Блики/свечения: параллакс при скролле, без геометрических форм */}
      <div
        className="absolute left-0 right-0 transition-transform duration-150 ease-out pointer-events-none"
        style={{
          height: '520vh',
          transform: `translate3d(0, ${-parallaxY}px, 0)`,
        }}
        aria-hidden
      >
        {rows.map((row, ri) => (
          <div key={ri} className="absolute left-0 right-0" style={{ top: row.top }}>
            {row.glows.map((g, gi) => (
              <div
                key={`${ri}-${gi}`}
                className="absolute rounded-full"
                style={{
                  width: g.w,
                  height: g.h,
                  left: g.left,
                  right: g.right,
                  opacity: g.opacity,
                  background: g.bg,
                  filter: 'blur(80px)',
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes mesh-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.85; }
        }
        .animate-mesh-pulse {
          animation: mesh-pulse 12s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default HexagonPattern;

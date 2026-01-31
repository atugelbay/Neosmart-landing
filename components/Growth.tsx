import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

// Animated Funnel Component
const AnimatedFunnel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { label: 'Заявки', count: 150, color: '#5B7CFF', width: '100%' },
    { label: 'Связались', count: 120, color: '#7B8FFF', width: '85%' },
    { label: 'Пробный урок', count: 80, color: '#7CF2C2', width: '65%' },
    { label: 'Студенты', count: 60, color: '#5EEDB0', width: '50%' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Funnel visualization */}
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div 
            key={i}
            className="relative transition-all duration-500"
            style={{ 
              opacity: i <= activeStep ? 1 : 0.3,
              transform: i === activeStep ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            <div 
              className="h-14 rounded-lg flex items-center justify-between px-4 transition-all duration-700 relative overflow-hidden mx-auto"
              style={{ 
                width: step.width,
                backgroundColor: `${step.color}20`,
                borderLeft: `3px solid ${step.color}`,
              }}
            >
              {/* Animated fill */}
              {i === activeStep && (
                <div 
                  className="absolute inset-0 animate-pulse-subtle"
                  style={{ backgroundColor: `${step.color}10` }}
                />
              )}
              
              <span className="text-white font-medium relative z-10">{step.label}</span>
              <div className="flex items-center gap-2 relative z-10">
                <span className="text-2xl font-bold" style={{ color: step.color }}>{step.count}</span>
                {i < steps.length - 1 && (
                  <span className="text-[#6B6B6B] text-sm">
                    → {Math.round((steps[i + 1].count / step.count) * 100)}%
                  </span>
                )}
              </div>
            </div>
            
            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <div className="flex justify-center my-1">
                <svg 
                  className="w-4 h-4 transition-all duration-500"
                  style={{ 
                    color: i < activeStep ? step.color : '#3a3f4b',
                    transform: i < activeStep ? 'translateY(0)' : 'translateY(-2px)'
                  }}
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16l-6-6h12l-6 6z"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float-particle"
            style={{
              left: `${20 + i * 15}%`,
              top: '0%',
              backgroundColor: steps[i % steps.length].color,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Stats summary */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#A0A7B4] text-sm">Конверсия воронки</p>
            <p className="text-2xl font-bold text-[#7CF2C2]">40%</p>
          </div>
          <div className="text-right">
            <p className="text-[#A0A7B4] text-sm">Средний цикл</p>
            <p className="text-2xl font-bold text-white">5 дней</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(150px) scale(0.8);
            opacity: 0.3;
          }
          100% {
            transform: translateY(300px) scale(0.5);
            opacity: 0;
          }
        }
        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// Live notifications
const LiveNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Новая заявка с сайта', time: 'Только что', type: 'new' },
    { id: 2, text: 'Алия записана на пробный', time: '2 мин назад', type: 'progress' },
    { id: 3, text: 'Марат стал студентом', time: '5 мин назад', type: 'success' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const typeColors = {
    new: '#5B7CFF',
    progress: '#FFBD2E',
    success: '#7CF2C2',
  };

  const typeIcons = {
    new: '📥',
    progress: '📝',
    success: '✓',
  };

  return (
    <div className="space-y-2">
      {notifications.map((notif, i) => (
        <div
          key={notif.id}
          className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 transition-all duration-500"
          style={{
            opacity: i === currentIndex ? 1 : 0.4,
            transform: i === currentIndex ? 'translateX(0) scale(1)' : 'translateX(-5px) scale(0.98)',
          }}
        >
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
            style={{ backgroundColor: `${typeColors[notif.type as keyof typeof typeColors]}20` }}
          >
            {typeIcons[notif.type as keyof typeof typeIcons]}
          </div>
          <div className="flex-1">
            <p className="text-sm text-white">{notif.text}</p>
            <p className="text-xs text-[#6B6B6B]">{notif.time}</p>
          </div>
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: typeColors[notif.type as keyof typeof typeColors] }}
          />
        </div>
      ))}
    </div>
  );
};

const Growth: React.FC = () => {
  return (
    <section id="growth" className="py-20 md:py-28">
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Animated Funnel */}
          <div className="bg-[#12151F] border border-white/10 rounded-2xl p-6 order-last lg:order-first">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold text-white">Воронка продаж</h4>
              <span className="text-xs text-[#6B6B6B] bg-white/5 px-2 py-1 rounded">Этот месяц</span>
            </div>
            <AnimatedFunnel />
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B7CFF]/10 border border-[#5B7CFF]/20 mb-4">
              <span className="text-[#5B7CFF] text-sm font-medium">CRM</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Превращайте заявки
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B7CFF] to-[#7CF2C2]">
                в студентов
              </span>
            </h2>
            
            <p className="text-lg text-[#A0A7B4] mb-8">
              Встроенная CRM ведёт клиентов от первого обращения до записи в группу. 
              Отслеживайте источники заявок и увеличивайте конверсию.
            </p>

            {/* Live notifications */}
            <div className="mb-6">
              <p className="text-sm text-[#6B6B6B] mb-3">Живые уведомления:</p>
              <LiveNotifications />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '40%', label: 'Конверсия' },
                { value: '2x', label: 'Быстрее' },
                { value: '0', label: 'Потерянных' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <p className="text-xl font-bold text-[#7CF2C2]">{stat.value}</p>
                  <p className="text-xs text-[#6B6B6B]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Growth;

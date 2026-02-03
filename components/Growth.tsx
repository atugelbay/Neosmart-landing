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
      {/* Funnel visualization — единая ширина контейнера, полоски выровнены по центру */}
      <div className="w-full max-w-[320px] mx-auto space-y-0">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative transition-all duration-500"
            style={{
              opacity: i <= activeStep ? 1 : 0.5,
            }}
          >
            <div
              className="h-12 rounded-lg flex items-center justify-between px-4 transition-all duration-700 relative overflow-hidden"
              style={{
                width: step.width,
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: `${step.color}18`,
                borderLeft: `3px solid ${step.color}`,
              }}
            >
              {i === activeStep && (
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundColor: `${step.color}15` }}
                />
              )}
              <span className="text-white text-sm font-medium relative z-10">{step.label}</span>
              <div className="flex items-center gap-2 relative z-10">
                <span className="text-lg font-bold tabular-nums" style={{ color: step.color }}>{step.count}</span>
                {i < steps.length - 1 && (
                  <span className="text-[#6B6B6B] text-xs">
                    → {Math.round((steps[i + 1].count / step.count) * 100)}%
                  </span>
                )}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-0.5">
                <svg className="w-3 h-3 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 16l-6-6h12l-6 6z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stats summary */}
      <div className="mt-6 pt-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[#A0A7B4] text-xs font-medium">Конверсия воронки</p>
            <p className="text-xl font-bold text-[#7CF2C2] mt-0.5">40%</p>
          </div>
          <div>
            <p className="text-[#A0A7B4] text-xs font-medium">Средний цикл</p>
            <p className="text-xl font-bold text-white mt-0.5">5 дней</p>
          </div>
        </div>
      </div>
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
          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-opacity duration-300"
          style={{ opacity: i === currentIndex ? 1 : 0.5 }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
            style={{ backgroundColor: `${typeColors[notif.type as keyof typeof typeColors]}20` }}
          >
            {typeIcons[notif.type as keyof typeof typeIcons]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{notif.text}</p>
            <p className="text-xs text-[#6B6B6B] mt-0.5">{notif.time}</p>
          </div>
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: typeColors[notif.type as keyof typeof typeColors] }}
          />
        </div>
      ))}
    </div>
  );
};

const Growth: React.FC = () => {
  const stats = [
    { value: '40%', label: 'Конверсия' },
    { value: '2x', label: 'Быстрее' },
    { value: '0', label: 'Потерянных' },
  ];

  return (
    <section id="growth" className="py-20 md:py-28">
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left — воронка (по центру колонки по вертикали) */}
          <div className="flex items-center order-last lg:order-first">
            <div className="bg-[#12151F] border border-white/10 rounded-2xl p-6 lg:p-8 w-full">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white">Воронка продаж</h4>
                <span className="text-xs text-[#A0A7B4] bg-white/5 px-2.5 py-1 rounded-lg">Этот месяц</span>
              </div>
              <AnimatedFunnel />
            </div>
          </div>

          {/* Right — текст и уведомления */}
          <div className="space-y-6 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5B7CFF]/10 border border-[#5B7CFF]/20">
              <span className="text-[#5B7CFF] text-sm font-medium">CRM</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Превращайте заявки
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B7CFF] to-[#7CF2C2]">
                в студентов
              </span>
            </h2>

            <p className="text-[#A0A7B4] text-base md:text-lg max-w-lg">
              Встроенная CRM ведёт клиентов от первого обращения до записи в группу.
              Отслеживайте источники заявок и увеличивайте конверсию.
            </p>

            <div>
              <p className="text-sm font-medium text-[#A0A7B4] mb-3">Живые уведомления</p>
              <LiveNotifications />
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="min-w-0 h-[80px] rounded-xl bg-white/[0.04] border border-white/[0.08] px-3 text-center flex flex-col items-center justify-center"
                >
                  <p className={`text-lg font-bold tabular-nums leading-none ${i === 0 ? 'text-[#7CF2C2]' : 'text-white'}`}>{stat.value}</p>
                  <p className="text-xs text-[#6B6B6B] mt-1.5 truncate w-full">{stat.label}</p>
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

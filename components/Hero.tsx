import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

// Animated Counter Hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, end, duration]);

  return { count, ref };
};

// Typing Effect Hook
const useTypingEffect = (text: string, speed: number = 50, delay: number = 500) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// 3D Tilt Hook - follows cursor across the whole section
const useTilt = (elementRef: React.RefObject<HTMLDivElement>, containerRef: React.RefObject<HTMLElement>) => {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  useEffect(() => {
    const container = containerRef.current;
    const element = elementRef.current;
    if (!container || !element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from cursor to element center
      const deltaX = (e.clientX - centerX) / 50; // Reduced intensity
      const deltaY = (e.clientY - centerY) / 50;
      
      // Clamp the rotation
      const rotateY = Math.max(-8, Math.min(8, deltaX));
      const rotateX = Math.max(-8, Math.min(8, -deltaY));
      
      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef, containerRef]);

  return transform;
};

// Floating Notifications
const FloatingNotifications: React.FC = () => {
  const notifications = [
    { text: 'Оплата получена', subtext: '+25,000 ₸', icon: '✓', color: '#7CF2C2', position: '-top-4 right-[15%]' },
    { text: 'Новый студент', subtext: 'Алия К.', icon: '+', color: '#5B7CFF', position: 'top-[30%] -right-2 translate-x-1/2' },
    { text: 'Урок завершен', subtext: 'Английский B2', icon: '●', color: '#FFBD2E', position: '-bottom-4 right-[25%]' },
  ];

  return (
    <>
      {notifications.map((notif, i) => (
        <div
          key={i}
          className={`absolute ${notif.position} z-30 animate-float-notif`}
          style={{ animationDelay: `${i * 1.2}s` }}
        >
          <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-lg px-3 py-2 shadow-2xl flex items-center gap-2">
            <div 
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
              style={{ backgroundColor: `${notif.color}20`, color: notif.color }}
            >
              {notif.icon}
            </div>
            <div>
              <p className="text-[10px] text-white font-medium whitespace-nowrap">{notif.text}</p>
              <p className="text-[9px] text-[#6B6B6B]">{notif.subtext}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Dashboard View (Home)
const DashboardView: React.FC = () => {
  const revenue = useCounter(2847340, 2500);
  const students = useCounter(248, 2000);
  const lessons = useCounter(1247, 2000);

  return (
    <div className="space-y-3 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-[#6B6B6B]">Общий доход</p>
          <div className="flex items-baseline gap-1">
            <span ref={revenue.ref} className="text-xl md:text-2xl font-bold text-white tabular-nums">
              {formatNumber(revenue.count)}
            </span>
            <span className="text-xs text-[#6B6B6B]">₸</span>
          </div>
        </div>
        <button className="px-2.5 py-1 rounded-lg bg-[#5B7CFF] text-white text-[10px] font-medium">
          Посмотреть
        </button>
      </div>

      <div className="flex items-center gap-2 text-[10px]">
        <span className="text-[#6B6B6B]">Статистика за</span>
        <span className="text-white bg-white/5 px-2 py-0.5 rounded">Январь ↓</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Доход', value: '+18.2%', change: '↑ 12%', color: '#5B7CFF', countRef: null },
          { label: 'Студенты', value: students.count, change: '↑ 8%', color: '#7CF2C2', countRef: students.ref },
          { label: 'Уроков', value: lessons.count, change: '→ 2%', color: '#FFBD2E', countRef: lessons.ref },
        ].map((item, i) => (
          <div key={i} className="bg-white/[0.03] rounded-lg p-2 border border-white/5">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[9px] text-[#6B6B6B]">{item.label}</p>
              <span className="text-[9px]" style={{ color: item.color }}>{item.change}</span>
            </div>
            <p ref={item.countRef} className="text-xs font-semibold text-white mb-1 tabular-nums">
              {item.countRef ? formatNumber(item.value as number) : item.value}
            </p>
            <div className="h-8">
              <svg className="w-full h-full" viewBox="0 0 100 32" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={item.color} stopOpacity="0.3"/>
                    <stop offset="100%" stopColor={item.color} stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path 
                  d={i === 0 ? "M0,24 Q15,22 25,20 T50,16 T75,12 T100,8 V32 H0 Z" : 
                     i === 1 ? "M0,20 Q20,18 35,16 T65,20 T85,10 T100,12 V32 H0 Z" :
                     "M0,16 Q25,14 40,18 T70,14 T100,16 V32 H0 Z"} 
                  fill={`url(#grad-${i})`}
                />
                <path 
                  d={i === 0 ? "M0,24 Q15,22 25,20 T50,16 T75,12 T100,8" : 
                     i === 1 ? "M0,20 Q20,18 35,16 T65,20 T85,10 T100,12" :
                     "M0,16 Q25,14 40,18 T70,14 T100,16"} 
                  fill="none" 
                  stroke={item.color} 
                  strokeWidth="1.5"
                  className="animate-draw"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/[0.03] rounded-lg border border-white/5">
        <div className="px-2.5 py-2 border-b border-white/5">
          <span className="text-[10px] font-medium text-white">Последняя активность</span>
        </div>
        {[
          { name: 'Алия К.', action: 'Оплата', amount: '+25,000 ₸', color: '#7CF2C2' },
          { name: 'Марат С.', action: 'Абонемент', amount: '8 уроков', color: '#5B7CFF' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between px-2.5 py-2 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2">
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-medium"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.name[0]}{item.name.split(' ')[1]?.[0]}
              </div>
              <div>
                <p className="text-[10px] text-white">{item.name}</p>
                <p className="text-[9px] text-[#6B6B6B]">{item.action}</p>
              </div>
            </div>
            <p className="text-[10px] text-white">{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Students View
const StudentsView: React.FC = () => {
  const total = useCounter(248, 1500);
  
  return (
    <div className="space-y-3 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-[#6B6B6B]">Всего студентов</p>
          <span ref={total.ref} className="text-xl md:text-2xl font-bold text-white tabular-nums">{total.count}</span>
        </div>
        <button className="px-2.5 py-1 rounded-lg bg-[#7CF2C2] text-[#0d0d0d] text-[10px] font-medium">
          + Добавить
        </button>
      </div>

      <div className="flex gap-2">
        <span className="text-[10px] bg-[#7CF2C2]/20 text-[#7CF2C2] px-2 py-0.5 rounded">Активные: 231</span>
        <span className="text-[10px] bg-white/5 text-[#6B6B6B] px-2 py-0.5 rounded">Архив: 17</span>
      </div>

      <div className="bg-white/[0.03] rounded-lg border border-white/5">
        <div className="grid grid-cols-12 gap-2 px-2.5 py-1.5 border-b border-white/5 text-[9px] text-[#6B6B6B]">
          <span className="col-span-5">Имя</span>
          <span className="col-span-4">Курс</span>
          <span className="col-span-3">Статус</span>
        </div>
        {[
          { name: 'Алия Касымова', course: 'Английский B2', status: 'active' },
          { name: 'Марат Сериков', course: 'Математика', status: 'active' },
          { name: 'Диана Нурланова', course: 'Физика', status: 'pending' },
          { name: 'Ержан Абдуллин', course: 'Английский A2', status: 'active' },
          { name: 'Камила Серик', course: 'Химия', status: 'active' },
        ].map((student, i) => (
          <div key={i} className="grid grid-cols-12 gap-2 px-2.5 py-1.5 border-b border-white/5 last:border-0 items-center">
            <div className="col-span-5 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#5B7CFF] to-[#7CF2C2] flex items-center justify-center text-[9px] font-medium text-white flex-shrink-0">
                {student.name[0]}
              </div>
              <span className="text-[10px] text-white truncate">{student.name}</span>
            </div>
            <span className="col-span-4 text-[10px] text-[#A0A7B4] truncate">{student.course}</span>
            <span className={`col-span-3 text-[9px] px-1.5 py-0.5 rounded-full w-fit ${
              student.status === 'active' ? 'bg-[#7CF2C2]/20 text-[#7CF2C2]' : 'bg-[#FFBD2E]/20 text-[#FFBD2E]'
            }`}>
              {student.status === 'active' ? 'Активен' : 'Ожидает'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Schedule View
const ScheduleView: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(2);
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const dates = [27, 28, 29, 30, 31, 1];

  return (
    <div className="space-y-3 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-[#6B6B6B]">Расписание</p>
          <span className="text-base font-bold text-white">Январь 2026</span>
        </div>
        <div className="flex gap-1">
          <button className="p-1 rounded bg-white/5 text-[#6B6B6B]">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 rounded bg-white/5 text-[#6B6B6B]">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-1.5">
        {days.map((day, i) => (
          <button
            key={i}
            onClick={() => setSelectedDay(i)}
            className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
              selectedDay === i 
                ? 'bg-[#5B7CFF] text-white' 
                : 'bg-white/5 text-[#6B6B6B]'
            }`}
          >
            <p className="text-[9px]">{day}</p>
            <p className="text-xs font-medium">{dates[i]}</p>
          </button>
        ))}
      </div>

      <div className="space-y-1.5">
        {[
          { time: '10:00', duration: '60 мин', subject: 'Английский B2', student: 'Алия К.', color: '#5B7CFF' },
          { time: '11:30', duration: '90 мин', subject: 'Математика', student: 'Группа М-1', color: '#7CF2C2' },
          { time: '14:00', duration: '60 мин', subject: 'Физика', student: 'Диана Н.', color: '#FFBD2E' },
          { time: '16:00', duration: '60 мин', subject: 'Химия', student: 'Ержан А.', color: '#5B7CFF' },
          { time: '17:30', duration: '60 мин', subject: 'История', student: 'Камила С.', color: '#7CF2C2' },
        ].map((lesson, i) => (
          <div 
            key={i} 
            className="flex gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5"
          >
            <div className="text-right w-10 flex-shrink-0">
              <p className="text-[10px] text-white font-medium">{lesson.time}</p>
              <p className="text-[9px] text-[#6B6B6B]">{lesson.duration}</p>
            </div>
            <div 
              className="w-0.5 rounded-full flex-shrink-0" 
              style={{ backgroundColor: lesson.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-white truncate">{lesson.subject}</p>
              <p className="text-[9px] text-[#6B6B6B] truncate">{lesson.student}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Analytics View
const AnalyticsView: React.FC = () => {
  const revenue = useCounter(2847340, 2000);
  const growth = useCounter(24, 1500);

  return (
    <div className="space-y-3 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-[#6B6B6B]">Аналитика</p>
          <span className="text-base font-bold text-white">Обзор за месяц</span>
        </div>
        <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#6B6B6B]">Январь 2026</span>
      </div>

      <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[10px] text-[#6B6B6B]">Доход</p>
            <p ref={revenue.ref} className="text-lg font-bold text-white tabular-nums">{formatNumber(revenue.count)} ₸</p>
          </div>
          <span ref={growth.ref} className="text-xs text-[#7CF2C2]">+{growth.count}%</span>
        </div>
        <div className="h-16">
          <svg className="w-full h-full" viewBox="0 0 200 55" preserveAspectRatio="none">
            <defs>
              <linearGradient id="analyticGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#5B7CFF" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#5B7CFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path 
              d="M0,40 Q20,36 40,32 T80,28 T120,20 T160,24 T200,12 V55 H0 Z" 
              fill="url(#analyticGrad)"
            />
            <path 
              d="M0,40 Q20,36 40,32 T80,28 T120,20 T160,24 T200,12" 
              fill="none" 
              stroke="#5B7CFF" 
              strokeWidth="2"
              className="animate-draw"
            />
            {[[0,40], [40,32], [80,28], [120,20], [160,24], [200,12]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill="#5B7CFF" className="animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}/>
            ))}
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Новых студентов', value: '+18', color: '#7CF2C2' },
          { label: 'Проведено уроков', value: '156', color: '#5B7CFF' },
          { label: 'Средний чек', value: '22,500 ₸', color: '#FFBD2E' },
          { label: 'Конверсия', value: '67%', color: '#7CF2C2' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.03] rounded-lg p-2 border border-white/5">
            <p className="text-[9px] text-[#6B6B6B] mb-0.5">{stat.label}</p>
            <p className="text-xs font-semibold" style={{ color: stat.color }}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Mock Dashboard Component
const MockDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: 'Главная' },
    { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197", label: 'Студенты' },
    { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: 'Расписание' },
    { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: 'Аналитика' },
  ];

  return (
    <div className="bg-[#0d0d0d] text-white p-4 h-[380px]">
      <div className="flex gap-3 h-full">
        <div className="hidden lg:flex flex-col gap-1.5 w-9 flex-shrink-0">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                activeTab === i 
                  ? 'bg-gradient-to-br from-[#5B7CFF] to-[#7CF2C2] text-white' 
                  : 'bg-white/5 text-[#6B6B6B] hover:bg-white/10 hover:text-white'
              }`}
              title={tab.label}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
              </svg>
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-hidden">
          {activeTab === 0 && <DashboardView />}
          {activeTab === 1 && <StudentsView />}
          {activeTab === 2 && <ScheduleView />}
          {activeTab === 3 && <AnalyticsView />}
        </div>
      </div>
    </div>
  );
};

// Animated Gradient Text
const AnimatedGradientText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="animated-gradient-text">
      {children}
    </span>
  );
};

const Hero: React.FC = () => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const transform = useTilt(tiltRef, heroRef);
  
  const subtitle = "CRM-система для образовательных центров. Автоматизируйте расписание, платежи и посещения легко и быстро.";
  const { displayText, isComplete } = useTypingEffect(subtitle, 30, 800);

  return (
    <section ref={heroRef} className="py-16 md:py-24 lg:py-32 relative">
      {/* Announcement Banner */}
      <AnimatedSection className="flex justify-center mb-8 md:mb-12">
        <a 
          href="#pricing" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] transition-all group"
        >
          <span className="text-sm text-[#A0A7B4]">Первый месяц бесплатно для новых клиентов</span>
          <span className="text-sm text-white font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Подробнее
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Text */}
        <AnimatedSection className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            <span className="text-white">Порядок в бизнесе -</span>
            <br />
            <AnimatedGradientText>
              больше времени на рост
            </AnimatedGradientText>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-[#A0A7B4] max-w-xl mx-auto lg:mx-0 min-h-[60px]">
            {displayText}
            {!isComplete && <span className="animate-blink">|</span>}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
            <a 
              href="https://app.neosmart.kz" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion();
                }
              }}
            >
              <Button variant="primary" className="w-full sm:w-auto">
                Попробовать бесплатно
              </Button>
            </a>
            <Link to="/guides" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-white hover:text-[#A0A7B4] transition-colors group">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span className="font-medium">Смотреть видео</span>
            </Link>
          </div>
        </AnimatedSection>

        {/* Right - Mock Dashboard with 3D Tilt */}
        <AnimatedSection className="relative">
          {/* Floating Notifications */}
          <FloatingNotifications />
          
          <div 
            ref={tiltRef}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl"
            style={{ 
              transform, 
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s ease-out'
            }}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d0d] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27CA40]"></div>
              </div>
              <span className="text-xs text-[#6B6B6B]">app.neosmart.kz</span>
              <span className="text-xs text-[#6B6B6B]">+</span>
            </div>
            
            <MockDashboard />
          </div>
        </AnimatedSection>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        
        @keyframes draw {
          from { stroke-dasharray: 0 1000; }
          to { stroke-dasharray: 1000 0; }
        }
        .animate-draw {
          animation: draw 1.5s ease-out forwards;
        }
        
        .tabular-nums {
          font-variant-numeric: tabular-nums;
        }

        /* Animated Gradient Text */
        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            #fff 0%,
            #5B7CFF 25%,
            #7CF2C2 50%,
            #5B7CFF 75%,
            #fff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 4s linear infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* Typing cursor blink */
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }

        /* Floating notifications */
        @keyframes floatNotif {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.9;
          }
          50% { 
            transform: translateY(-8px) rotate(1deg); 
            opacity: 1;
          }
        }
        .animate-float-notif {
          animation: floatNotif 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

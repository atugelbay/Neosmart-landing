import React, { useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import StudentIcon from './icons/StudentIcon';
import ScheduleIcon from './icons/ScheduleIcon';
import SubscriptionIcon from './icons/SubscriptionIcon';
import FinanceIcon from './icons/FinanceIcon';
import screenStudents from '../screens/9.png';
import screenStudentsAlt from '../screens/10.png';
import screenSchedule from '../screens/4.png';
import screenScheduleAlt from '../screens/6.png';
import screenSubscriptions from '../screens/1.png';
import screenSubscriptionsAlt from '../screens/3.png';
import screenFinance from '../screens/11.png';
import screenFinanceAlt from '../screens/12.png';

const solutions = [
    {
        icon: <StudentIcon className="w-8 h-8" />,
        title: 'Студенты, платежи и посещаемость',
        description: 'Вся информация в одном месте. Ведите базу учеников, отслеживайте баланс каждого, отмечайте посещения. Система автоматически списывает занятия, избавляя от ручных расчетов в Excel.',
        images: [screenStudents, screenStudentsAlt],
        imageAlt: 'Дашборд со студентами и платежами'
    },
    {
        icon: <ScheduleIcon className="w-8 h-8" />,
        title: 'Расписание, которое не ломается',
        description: 'Создавайте групповые и индивидуальные занятия в наглядном календаре. Назначайте кабинеты, переносите уроки в один клик. Neosmart сам проверяет конфликты и не дает поставить два занятия в одно время.',
        images: [screenSchedule, screenScheduleAlt],
        imageAlt: 'Календарь и расписание уроков'
    },
    {
        icon: <SubscriptionIcon className="w-8 h-8" />,
        title: 'Система сама считает абонементы',
        description: 'Главное отличие от других CRM. Продавайте абонементы на 4, 8, 12 занятий. Система сама отследит остаток, предупредит об окончании и позволит "заморозить" абонемент, если ученик заболел.',
        images: [screenSubscriptions, screenSubscriptionsAlt],
        imageAlt: 'Абонементы и списания в интерфейсе CRM'
    },
    {
        icon: <FinanceIcon className="w-8 h-8" />,
        title: 'Полная прозрачность финансов',
        description: 'Панель для руководителя, которая показывает главное: сколько денег в кассе, кто из учеников должен оплатить, какие курсы приносят больше прибыли. Принимайте решения на основе цифр, а не догадок.',
        images: [screenFinance, screenFinanceAlt],
        imageAlt: 'Финансовый дашборд и отчёты'
    }
];

const CoreSolutions: React.FC = () => {
  const [imageStep, setImageStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageStep((step) => step + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="solutions" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Единая система для решения ключевых задач</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Neosmart объединяет все процессы, чтобы вы управляли центром, а не тонули в хаосе.</p>
      </AnimatedSection>
        
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1.5">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0B0F1A]">
              {solution.images.map((imgSrc, i) => {
                const isActive = (imageStep % solution.images.length) === i;
                return (
                  <img
                    key={imgSrc}
                    src={imgSrc}
                    alt={solution.imageAlt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                  />
                );
              })}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0B0F1A]/70 backdrop-blur-sm px-3 py-2 rounded-lg text-[#7CF2C2]">
                {solution.icon}
                <span className="text-xs font-semibold uppercase tracking-wide text-white/90">CRM</span>
              </div>
            </div>
            <div className="p-6 pt-5 space-y-2">
              <h3 className="text-xl font-bold text-white">{solution.title}</h3>
              <p className="text-[#A0A7B4] text-sm leading-relaxed">{solution.description}</p>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
};

export default CoreSolutions;

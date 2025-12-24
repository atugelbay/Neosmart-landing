import React from 'react';
import AnimatedSection from './AnimatedSection';
import StudentIcon from './icons/StudentIcon';
import ScheduleIcon from './icons/ScheduleIcon';
import SubscriptionIcon from './icons/SubscriptionIcon';
import FinanceIcon from './icons/FinanceIcon';

const solutions = [
    {
        icon: <StudentIcon className="w-8 h-8" />,
        title: 'Студенты, платежи и посещаемость',
        description: 'Вся информация в одном месте. Ведите базу учеников, отслеживайте баланс каждого, отмечайте посещения. Система автоматически списывает занятия, избавляя от ручных расчетов в Excel.',
    },
    {
        icon: <ScheduleIcon className="w-8 h-8" />,
        title: 'Расписание, которое не ломается',
        description: 'Создавайте групповые и индивидуальные занятия в наглядном календаре. Назначайте кабинеты, переносите уроки в один клик. Neosmart сам проверяет конфликты и не дает поставить два занятия в одно время.',
    },
    {
        icon: <SubscriptionIcon className="w-8 h-8" />,
        title: 'Система сама считает абонементы',
        description: 'Главное отличие от других CRM. Продавайте абонементы на 4, 8, 12 занятий. Система сама отследит остаток, предупредит об окончании и позволит "заморозить" абонемент, если ученик заболел.',
    },
    {
        icon: <FinanceIcon className="w-8 h-8" />,
        title: 'Полная прозрачность финансов',
        description: 'Панель для руководителя, которая показывает главное: сколько денег в кассе, кто из учеников должен оплатить, какие курсы приносят больше прибыли. Принимайте решения на основе цифр, а не догадок.',
    }
];

const CoreSolutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Единая система для решения ключевых задач</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Neosmart объединяет все процессы, чтобы вы управляли центром, а не тонули в хаосе.</p>
      </AnimatedSection>
        
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300">
            <div className="mb-4 text-[#7CF2C2]">
              {solution.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
            <p className="text-[#A0A7B4]">{solution.description}</p>
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
};

export default CoreSolutions;

import React from 'react';
import AnimatedSection from './AnimatedSection';

const problems = [
  {
    title: 'Административный хаос',
    description: 'Информация об учениках, оплатах и группах разбросана по разным таблицам и чатам. Сложно что-то быстро найти.',
  },
  {
    title: 'Ручное расписание',
    description: 'Составление и изменение расписания в Excel отнимает часы и постоянно приводит к ошибкам и накладкам.',
  },
  {
    title: 'Потерянные оплаты',
    description: 'Непонятно, кто и когда должен платить. Приходится вручную отслеживать должников, теряя деньги и время.',
  },
  {
    title: 'Зависимость от WhatsApp',
    description: 'Вся коммуникация с родителями и учениками тонет в десятках чатов, где теряются важные сообщения и договоренности.',
  },
];

const Problems: React.FC = () => {
  return (
    <section id="problems" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Устали от рутины и беспорядка?</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Эти проблемы мешают вашему центру расти и отнимают самое ценное — ваше время.</p>
      </AnimatedSection>
        
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {problems.map((item, index) => (
          <div key={index} className="relative pl-12">
             <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#5B7CFF] to-[#7CF2C2] text-[#0B0F1A] rounded-lg font-bold text-base">
               {index + 1}
             </div>
             <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
             <p className="text-[#A0A7B4]">{item.description}</p>
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
};

export default Problems;

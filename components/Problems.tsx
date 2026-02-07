import React from 'react';
import AnimatedSection from './AnimatedSection';

const problems = [
  {
    title: 'Административный хаос',
    description: 'Теряете до 3 часов в день на поиск информации об учениках, оплатах и группах в разных таблицах и чатах. Ручная работа снижает эффективность на 40%.',
  },
  {
    title: 'Ручное расписание',
    description: 'Составление расписания в Excel занимает до 5 часов в неделю и приводит к накладкам. В среднем 15% занятий переносятся из-за конфликтов в расписании.',
  },
  {
    title: 'Потерянные оплаты',
    description: 'Каждый центр в среднем теряет 150,000₸ в месяц из-за несвоевременного контроля оплат. Ручное отслеживание должников отнимает до 2 часов ежедневно.',
  },
  {
    title: 'Зависимость от WhatsApp',
    description: 'Важные сообщения теряются в десятках чатов. До 20% заявок не обрабатываются вовремя, потому что их просто не заметили среди личных сообщений.',
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
          <div key={index} className="relative pl-12 border-0">
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

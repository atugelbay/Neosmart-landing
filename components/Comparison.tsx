import React from 'react';
import AnimatedSection from './AnimatedSection';
import CheckIcon from './icons/CheckIcon';
import MinusCircleIcon from './icons/MinusCircleIcon';

const comparisonData = [
  {
    feature: 'Управление студентами',
    excel: 'Ручной ввод, ошибки, дубликаты',
    alfa: 'Ограниченная гибкость карточки студента',
    neosmart: 'Единая система студентов, групп и истории',
  },
  {
    feature: 'Расписание',
    excel: 'Постоянные правки и конфликты',
    alfa: 'Неудобные изменения и переносы',
    neosmart: 'Визуальный календарь, проверка конфликтов',
  },
  {
    feature: 'Абонементы и списания',
    excel: 'Ручной контроль, легко ошибиться',
    alfa: 'Сложная настройка правил',
    neosmart: 'Автоматическое списание и контроль остатков',
  },
  {
    feature: 'Финансы и долги',
    excel: 'Нет прозрачности, сложные формулы',
    alfa: 'Базовая аналитика, нет полной картины',
    neosmart: 'Полный контроль доходов, долгов и платежей',
  },
  {
    feature: 'CRM и заявки',
    excel: 'Не предназначен для ведения лидов',
    alfa: 'Есть, но сложный и перегруженный',
    neosmart: 'Простой и наглядный процесс до зачисления',
  },
  {
    feature: 'Масштабирование',
    excel: 'Не масштабируется, хаос при росте',
    alfa: 'Ограничен для роста и сетей центров',
    neosmart: 'Рассчитан на рост бизнеса и открытие филиалов',
  },
  {
    feature: 'Внедрение и переход',
    excel: 'Бесплатно, но приводит к беспорядку',
    alfa: 'Сложный и долгий переезд с риском потерь',
    neosmart: 'Быстрый перенос данных и помощь с настройкой',
  },
];

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Когда Excel и таблицы больше не справляются</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Посмотрите, почему переход на специализированную CRM — это логичный шаг для роста вашего центра.</p>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          <div className="hidden md:grid md:grid-cols-12 bg-white/5">
            <div className="md:col-span-3 p-4 font-semibold text-white">Критерий</div>
            <div className="md:col-span-3 p-4 font-semibold text-[#A0A7B4]">Excel / Таблицы</div>
            <div className="md:col-span-3 p-4 font-semibold text-[#A0A7B4]">Устаревшие CRM</div>
            <div className="md:col-span-3 p-4 font-semibold text-[#7CF2C2]">Neosmart</div>
          </div>
          {comparisonData.map((item, index) => (
            <div key={item.feature} className={`border-t border-white/10 p-4 md:p-0 ${index === 0 ? 'border-t-0' : ''}`}>
              {/* Mobile View */}
              <div className="md:hidden">
                <h3 className="font-semibold text-lg text-white mb-4">{item.feature}</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-white/20 pl-3">
                    <p className="font-semibold text-[#A0A7B4]">Excel / Таблицы</p>
                    <p className="text-white/90">{item.excel}</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-3">
                    <p className="font-semibold text-[#A0A7B4]">Устаревшие CRM</p>
                    <p className="text-white/90">{item.alfa}</p>
                  </div>
                   <div className="border-l-2 border-[#7CF2C2] pl-3">
                    <p className="font-semibold text-[#7CF2C2]">Neosmart</p>
                    <p className="text-white">{item.neosmart}</p>
                  </div>
                </div>
              </div>
              {/* Desktop View */}
              <div className="hidden md:grid md:grid-cols-12 items-center">
                <div className="md:col-span-3 p-4 font-semibold text-white">{item.feature}</div>
                <div className="md:col-span-3 p-4 text-[#A0A7B4] flex items-start gap-2"><MinusCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />{item.excel}</div>
                <div className="md:col-span-3 p-4 text-[#A0A7B4] flex items-start gap-2"><MinusCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />{item.alfa}</div>
                <div className="md:col-span-3 p-4 text-white flex items-start gap-2"><CheckIcon className="w-5 h-5 text-[#7CF2C2] mt-0.5 flex-shrink-0" />{item.neosmart}</div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Comparison;

import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import SetupIcon from './icons/SetupIcon';
import DataWorkIcon from './icons/DataWorkIcon';
import ControlIcon from './icons/ControlIcon';

const Onboarding: React.FC = () => {
  const steps = [
    {
      day: 'День 1',
      title: 'Подключение и настройка',
      description: 'Мы создаем ваш аккаунт и помогаем перенести базу учеников из Excel или другой CRM. Вы сразу начинаете работать в готовой системе, а не разбираться в настройках.',
      icon: <SetupIcon className="w-8 h-8" />,
    },
    {
      day: 'День 2',
      title: 'Работа с реальными данными',
      description: 'Ваши администраторы уже ведут запись, отмечают посещения и принимают оплаты в Neosmart. Преподаватели видят свое актуальное расписание.',
      icon: <DataWorkIcon className="w-8 h-8" />,
    },
    {
      day: 'День 3',
      title: 'Контроль и прозрачность',
      description: 'Вы видите полную картину бизнеса: отчеты по оплатам, загрузке групп и задолженностям. Вы управляете центром на основе цифр, а не догадок.',
      icon: <ControlIcon className="w-8 h-8" />,
    },
  ];

  return (
    <section id="onboarding" className="py-20 md:py-28 bg-white/[.02] rounded-3xl my-10">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Начать с Neosmart — проще, чем кажется</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Мы полностью берем на себя процесс внедрения, чтобы вы не отвлекались от управления центром и не останавливали работу.</p>
      </AnimatedSection>

      <AnimatedSection className="relative px-4">
        <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-white/10 hidden lg:block"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5B7CFF] to-[#7CF2C2] text-[#0B0F1A] rounded-lg flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#A0A7B4]">{step.day}</p>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-[#A0A7B4]">{step.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="text-center mt-20 px-4">
         <p className="text-lg text-[#A0A7B4] mb-6 max-w-2xl mx-auto">Готовы увидеть, как Neosmart наведет порядок в вашем центре?</p>
         <Button variant="secondary" className="px-8 py-3">Посмотреть, как это работает</Button>
      </AnimatedSection>
    </section>
  );
};

export default Onboarding;

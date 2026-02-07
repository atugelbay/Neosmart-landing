import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import SetupIcon from './icons/SetupIcon';
import ScheduleIcon from './icons/ScheduleIcon';
import DemoIcon from './icons/DemoIcon';
import { useModal } from '../App';

const Onboarding: React.FC = () => {
  const { openModal } = useModal();
  const features = [
    {
      icon: <SetupIcon className="w-6 h-6" />,
      title: 'Интуитивный интерфейс',
      description: 'Никаких сложных инструкций. Всё понятно с первого взгляда — как в приложениях, которыми вы пользуетесь каждый день.',
    },
    {
      icon: <ScheduleIcon className="w-6 h-6" />,
      title: 'Работайте с первой минуты',
      description: 'Создайте аккаунт и сразу добавляйте студентов, ставьте расписание, принимайте оплаты. Без долгих настроек.',
    },
    {
      icon: <DemoIcon className="w-6 h-6" />,
      title: 'Подсказки везде',
      description: 'Система сама подскажет что делать дальше. А если вопросы — мы всегда на связи и поможем разобраться.',
    },
  ];

  return (
    <section id="onboarding" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CF2C2]/10 border border-[#7CF2C2]/20 mb-6">
          <span className="text-[#7CF2C2] text-sm font-medium">Просто начните</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Откройте и работайте —
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B7CFF] to-[#7CF2C2]">
            без обучения
          </span>
        </h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">
          Neosmart настолько простой, что вы разберётесь сами. Серьёзно.
        </p>
      </AnimatedSection>

      <AnimatedSection className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#5B7CFF] to-[#7CF2C2] rounded-xl flex items-center justify-center text-[#0B0F1A] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[#A0A7B4] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="text-center mt-12 px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <a 
              href="https://app.neosmart.kz/register" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion();
                }
              }}
            >
              <Button variant="primary" className="px-8 py-3">
                Попробовать бесплатно
              </Button>
            </a>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-[#6B6B6B]">
              <span>✓ Регистрация за 30 секунд</span>
              <span>✓ Без карты</span>
              <span>✓ Техподдержка 24/7</span>
            </div>
          </div>
          
          <Button variant="secondary" className="px-8 py-3" onClick={openModal}>
            Запросить звонок
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Onboarding;

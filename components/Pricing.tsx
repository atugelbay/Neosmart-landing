import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import CheckIcon from './icons/CheckIcon';
import TrustIcon from './icons/TrustIcon';
import MigrationIcon from './icons/MigrationIcon';
import OnboardingIcon from './icons/OnboardingIcon';
import DemoIcon from './icons/DemoIcon';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'БАЗОВЫЙ',
      description: 'Для небольших центров, которые хотят навести порядок в процессах.',
      price: 'от 15 000 ₸ / мес.',
      features: [
        'Учет учеников и групп',
        'Умное расписание',
        'Абонементы и посещаемость',
        'Базовый учет финансов',
      ],
      cta: 'Попробовать',
      variant: 'secondary'
    },
    {
      name: 'СТАНДАРТ',
      description: 'Для растущих школ, которым нужен полный контроль и аналитика.',
      price: 'от 25 000 ₸ / мес.',
      features: [
        'Все возможности тарифа "Базовый"',
        'Финансовые отчеты для руководителя',
        'CRM для учета заявок (лидов)',
        'Уведомления для клиентов и сотрудников',
      ],
      cta: 'Запросить демо',
      variant: 'primary',
      popular: true
    },
    {
      name: 'ПРО',
      description: 'Для крупных центров и сетей с особыми требованиями.',
      price: 'Индивидуально',
      features: [
        'Все возможности тарифа "Стандарт"',
        'Расширенные роли доступа',
        'Приоритетная поддержка',
        'Помощь с переносом данных из других систем',
      ],
      cta: 'Подобрать тариф',
      variant: 'secondary'
    },
  ];

  const trustElements = [
      { icon: <DemoIcon className="w-8 h-8" />, title: "Бесплатный демо-доступ", description: "Познакомьтесь с системой перед покупкой." },
      { icon: <OnboardingIcon className="w-8 h-8" />, title: "Помощь на старте", description: "Поможем настроить систему под ваши процессы." },
      { icon: <TrustIcon className="w-8 h-8" />, title: "Безопасность данных", description: "Данные вашего центра надежно защищены." },
      { icon: <MigrationIcon className="w-8 h-8" />, title: "Перенос из AlfaCRM", description: "Легкий переезд с сохранением всех данных." },
  ]

  return (
    <section id="pricing" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Прозрачные тарифы для вашего бизнеса</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Выберите план, который растет вместе с вами. Цена зависит от количества активных учеников.</p>
      </AnimatedSection>

      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <div key={index} className={`bg-white/5 border rounded-2xl p-8 flex flex-col relative ${plan.popular ? 'border-[#7CF2C2]' : 'border-white/10'}`}>
            {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#7CF2C2] text-[#0B0F1A] px-4 py-1 rounded-full text-sm font-semibold">САМЫЙ ПОПУЛЯРНЫЙ</div>}
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            <p className="text-[#A0A7B4] mt-2 h-12">{plan.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-white">{plan.price.split(' ')[0]}</span>
              <span className="text-[#A0A7B4] ml-2">{plan.price.split(' ').slice(1).join(' ')}</span>
            </div>
            <ul className="mt-8 space-y-4 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-[#7CF2C2] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant={plan.variant as 'primary' | 'secondary'} className="w-full">{plan.cta}</Button>
            </div>
          </div>
        ))}
      </AnimatedSection>
      
      <AnimatedSection className="mt-24">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">В каждый тариф включено</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustElements.map((item, index) => (
                <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto text-[#7CF2C2]">
                        {item.icon}
                    </div>
                    <h4 className="font-semibold text-white mt-4">{item.title}</h4>
                    <p className="text-[#A0A7B4] text-sm mt-1">{item.description}</p>
                </div>
            ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Pricing;
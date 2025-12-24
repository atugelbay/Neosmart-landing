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
      slogan: 'Всё необходимое для старта',
      description: 'Идеален для частных преподавателей',
      price: 'от 25 000 ₸ / мес.',
      features: [
        'Небольшие центры до 50 студентов',
        'Один филиал',
        'Полный функционал без ограничений по возможностям',
        'Частный репетитор с группой студентов',
        'Небольшая языковая школа',
        'Студия раннего развития',
      ],
      cta: 'Попробовать',
      variant: 'secondary'
    },
    {
      name: 'СТАНДАРТ',
      slogan: 'Для растущего бизнеса',
      description: 'Средние образовательные центры',
      price: 'от 50 000 ₸ / мес.',
      features: [
        'До 200 студентов',
        'До 3 филиалов',
        'Полный функционал для масштабирования',
        'Сеть языковых школ (2-3 филиала)',
        'Образовательный центр с несколькими направлениями',
        'Детский развивающий центр с расширением',
      ],
      cta: 'Запросить демо',
      variant: 'primary',
      popular: true
    },
    {
      name: 'ПРО',
      slogan: 'Для крупного бизнеса',
      description: 'Крупные сети и франшизы',
      price: 'от 120 000 ₸ / мес.',
      features: [
        'До 1000 студентов, 50 пользователей, 10 филиалов',
        'Приоритетная поддержка',
        'Все интеграции и расширенные возможности',
        'Образовательная франшиза (5-10 филиалов)',
        'Крупная сеть центров',
        'Региональная сеть школ',
      ],
      cta: 'Подобрать тариф',
      variant: 'secondary'
    },
    {
      name: 'ENTERPRISE',
      slogan: 'Индивидуальные решения',
      description: 'Очень крупные сети, международные франшизы',
      price: 'Индивидуально',
      features: [
        'Без ограничений',
        'Персональный менеджер и 24/7 поддержка',
        'Кастомные интеграции и выделенный сервер',
        'SLA гарантии',
        'Международная образовательная франшиза',
        'Крупная корпорация с образовательными программами',
        'Сеть с сотнями филиалов',
        'Государственные образовательные учреждения',
      ],
      cta: 'Связаться с нами',
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

      <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <div key={index} className={`bg-white/5 border rounded-2xl p-8 flex flex-col relative min-w-0 ${plan.popular ? 'border-[#7CF2C2]' : 'border-white/10'}`}>
            {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#7CF2C2] text-[#0B0F1A] px-4 py-1 rounded-full text-sm font-semibold">САМЫЙ ПОПУЛЯРНЫЙ</div>}
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            {plan.slogan && <p className="text-[#7CF2C2] text-sm font-medium mt-1">{plan.slogan}</p>}
            <p className="text-[#A0A7B4] mt-3 text-sm">{plan.description}</p>
            <div className="mt-6 min-w-0">
              {plan.price === 'Индивидуально' ? (
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight break-words">Индивидуально</span>
              ) : (
                (() => {
                  const parts = plan.price.split(' ');
                  const priceParts = parts.slice(1, -3); // число (например, "25", "000")
                  const currencyParts = parts.slice(-3); // "₸ / мес."
                  return (
                    <div className="flex items-baseline flex-wrap">
                      <span className="text-sm md:text-base text-[#A0A7B4] mr-2">от</span>
                      <span className="text-4xl font-bold text-white">{priceParts.join(' ')}</span>
                      <span className="text-[#A0A7B4] ml-2 text-lg">{currencyParts.join(' ')}</span>
                    </div>
                  );
                })()
              )}
            </div>
            <ul className="mt-8 space-y-3 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-[#7CF2C2] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{feature}</span>
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
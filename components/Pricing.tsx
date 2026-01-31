import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import CheckIcon from './icons/CheckIcon';
import TrustIcon from './icons/TrustIcon';
import OnboardingIcon from './icons/OnboardingIcon';
import DemoIcon from './icons/DemoIcon';
import { useModal } from '../App';

const Pricing: React.FC = () => {
  const { openModal } = useModal();
  // Переключатель для показа тарифов (пока скрыты)
  const showPricingCards = false;

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
      cta: 'Запросить звонок',
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
      { icon: <DemoIcon className="w-8 h-8" />, title: "Бесплатный демо-доступ", description: "Познакомьтесь с системой без обязательств." },
      { icon: <OnboardingIcon className="w-8 h-8" />, title: "Помощь на старте", description: "Поможем настроить систему под ваши процессы." },
      { icon: <TrustIcon className="w-8 h-8" />, title: "Безопасность данных", description: "Данные вашего центра надежно защищены." },
  ];

  const includedFeatures = [
    'Неограниченное количество студентов',
    'Все филиалы и пользователи',
    'Расписание и посещаемость',
    'Абонементы и оплаты',
    'Аналитика и отчёты',
    'CRM для заявок',
    'Техническая поддержка',
    'Регулярные обновления',
  ];

  return (
    <section id="pricing" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Тарифы</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Простая и понятная система оплаты</p>
      </AnimatedSection>

      {/* Промо-баннер "Бесплатно" */}
      <AnimatedSection className="mb-16">
        <div className="relative">
          {/* Основной контент */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Левая часть - текст */}
            <div className="text-center lg:text-left">
              {/* Бейдж */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CF2C2]/10 border border-[#7CF2C2]/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CF2C2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7CF2C2]"></span>
                </span>
                <span className="text-[#7CF2C2] text-sm font-medium">Early Access</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Полный доступ
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B7CFF] to-[#7CF2C2]">
                  бесплатно
                </span>
              </h3>

              <p className="text-lg text-[#A0A7B4] mb-8 max-w-md mx-auto lg:mx-0">
                Мы только запустились и приглашаем вас стать одними из первых пользователей. 
                Все функции — без ограничений.
              </p>

              {/* Фичи в две колонки */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
                {includedFeatures.slice(0, 6).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-[#7CF2C2] flex-shrink-0" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="https://app.neosmart.kz" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="px-6 py-3">
                    Начать бесплатно
                  </Button>
                </a>
                <Button variant="secondary" className="px-6 py-3" onClick={openModal}>
                  Запросить звонок
                </Button>
              </div>

              <p className="mt-4 text-xs text-[#6B6B6B]">
                Без привязки карты • Отмена в любой момент
              </p>
            </div>

            {/* Правая часть - карточка */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B7CFF]/20 to-[#7CF2C2]/20 blur-3xl -z-10"></div>
              
              {/* Карточка */}
              <div className="bg-[#12151F] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                {/* Декор */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7CF2C2]/10 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  {/* Header карточки */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[#A0A7B4] text-sm">Ваш тариф</p>
                      <h4 className="text-2xl font-bold text-white">Early Bird</h4>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#7CF2C2]/20 border border-[#7CF2C2]/30">
                      <span className="text-[#7CF2C2] text-sm font-medium">Активен</span>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-bold text-white">0</span>
                      <span className="text-2xl text-[#7CF2C2]">₸</span>
                      <span className="text-[#A0A7B4]">/ мес</span>
                    </div>
                    <p className="text-[#A0A7B4] text-sm mt-2">Вместо платных тарифов</p>
                  </div>

                  {/* Включено */}
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-[#A0A7B4] font-medium">Что включено:</p>
                    {[
                      '∞ Студентов',
                      '∞ Филиалов', 
                      '∞ Пользователей',
                      'Все интеграции',
                      'Приоритетная поддержка',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#7CF2C2]/20 flex items-center justify-center">
                          <CheckIcon className="w-3 h-3 text-[#7CF2C2]" />
                        </div>
                        <span className="text-white text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Подвал карточки */}
                  <div className="flex items-center gap-2 text-[#A0A7B4] text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Данные защищены</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Карточки тарифов (скрыты, но сохранены в коде) */}
      {showPricingCards && (
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
                    const priceParts = parts.slice(1, -3);
                    const currencyParts = parts.slice(-3);
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
      )}
      
      <AnimatedSection className="mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Что вы получаете</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

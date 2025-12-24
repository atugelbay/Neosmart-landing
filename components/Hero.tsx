import React from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-24 md:py-32 lg:py-48">
      <AnimatedSection>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-[#A0A7B4]">
          Наведите порядок в учебном центре. Зарабатывайте больше.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[#A0A7B4]">
          Neosmart автоматизирует расписание, оплаты и работу с учениками, чтобы вы могли сосредоточиться на росте бизнеса, а не на рутине.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="primary" className="w-full sm:w-auto">Попробовать бесплатно</Button>
          <Button variant="secondary" className="w-full sm:w-auto">Запросить демо</Button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;

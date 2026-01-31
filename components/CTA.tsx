import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { useModal } from '../App';

const CTA: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-20 md:py-28">
      <AnimatedSection>
        <div className="bg-gradient-to-br from-[#5B7CFF]/20 to-[#7CF2C2]/20 border border-white/10 rounded-2xl text-center p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold">Избавьтесь от хаоса. Управляйте центром с удовольствием.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#A0A7B4]">
            Попробуйте Neosmart и посмотрите, сколько времени и денег вы сэкономите, когда расписание, финансы и ученики находятся под полным контролем.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.neosmart.kz" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="text-lg px-8 py-4">
                Начать бесплатно
              </Button>
            </a>
            <Button variant="secondary" className="text-lg px-8 py-4" onClick={openModal}>
              Запросить звонок
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTA;

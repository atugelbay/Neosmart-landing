import React from 'react';
import AnimatedSection from './AnimatedSection';
import GrowthIcon from './icons/GrowthIcon';

const Growth: React.FC = () => {
  return (
    <section id="growth" className="py-20 md:py-28">
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 aspect-video lg:aspect-square flex items-center justify-center order-last lg:order-first">
             <div className="text-center">
                <GrowthIcon className="w-24 h-24 mx-auto text-[#7CF2C2]" />
                <p className="mt-4 text-2xl text-white font-bold">Ни одна заявка не теряется</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Превращайте заявки в учеников</h2>
            <p className="mt-4 text-lg text-[#A0A7B4]">
              Встроенная CRM-система помогает вести новых клиентов от первого обращения до записи в группу. Отслеживайте, из какого источника приходят заявки, и контролируйте работу менеджеров, чтобы увеличить конверсию в продажи.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Growth;

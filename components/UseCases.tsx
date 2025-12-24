import React from 'react';
import AnimatedSection from './AnimatedSection';
import UseCaseCard from './UseCaseCard';
import LanguageSchoolIcon from './icons/LanguageSchoolIcon';
import TestPrepIcon from './icons/TestPrepIcon';
import KidsCenterIcon from './icons/KidsCenterIcon';
import OnlineSchoolIcon from './icons/OnlineSchoolIcon';

const useCasesData = [
  {
    icon: <LanguageSchoolIcon className="w-8 h-8" />,
    title: 'Языковая школа',
    description: 'Для школ с группами по уровням, индивидуальными занятиями и гибким расписанием.',
    benefits: [
      'Автоматический учет занятий по абонементам',
      'Наглядное расписание для групп и преподавателей',
      'Контроль оплат и задолженностей',
      'Отметка посещаемости в один клик'
    ]
  },
  {
    icon: <TestPrepIcon className="w-8 h-8" />,
    title: 'Центр подготовки к ЕНТ',
    description: 'Для организации интенсивных курсов, потоков и пробных тестов.',
    benefits: [
      'Быстрое формирование и изменение состава групп',
      'Учет краткосрочных курсов и интенсивов',
      'Строгий контроль посещаемости и оплат',
      'Аналитика по прибыльности курсов'
    ]
  },
  {
    icon: <KidsCenterIcon className="w-8 h-8" />,
    title: 'Детский центр',
    description: 'Для ведения множества групп разного возраста и направлений.',
    benefits: [
      'Управление долгосрочными абонементами',
      '"Заморозка" занятий на время болезни',
      'Автоматические уведомления для родителей',
      'Максимальное упрощение работы администратора'
    ]
  },
  {
    icon: <OnlineSchoolIcon className="w-8 h-8" />,
    title: 'Онлайн-школа',
    description: 'Для организации учебного процесса учеников из разных часовых поясов.',
    benefits: [
      'Гибкое расписание для онлайн-занятий',
      'Учет индивидуальных и групповых уроков',
      'Полный контроль оплат и абонементов',
      'Масштабирование без хаоса в процессах'
    ]
  }
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Идеально подходит для разных форматов обучения</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Neosmart разработан с учетом специфики работы современных образовательных центров.</p>
      </AnimatedSection>
        
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {useCasesData.map((useCase, index) => (
          <UseCaseCard 
            key={index} 
            icon={useCase.icon} 
            title={useCase.title} 
            description={useCase.description} 
            benefits={useCase.benefits} 
          />
        ))}
      </AnimatedSection>
    </section>
  );
};

export default UseCases;

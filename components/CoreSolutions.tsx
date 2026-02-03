import React from 'react';
import AnimatedSection from './AnimatedSection';
import StudentIcon from './icons/StudentIcon';
import ScheduleIcon from './icons/ScheduleIcon';
import SubscriptionIcon from './icons/SubscriptionIcon';
import FinanceIcon from './icons/FinanceIcon';

const solutions = [
  {
    icon: <StudentIcon className="w-8 h-8" />,
    title: 'Студенты, платежи и посещаемость',
    description: 'Вся информация в одном месте. Ведите базу учеников, отслеживайте баланс каждого, отмечайте посещения. Система автоматически списывает занятия, избавляя от ручных расчетов в Excel.',
    demo: 'attendance'
  },
  {
    icon: <ScheduleIcon className="w-8 h-8" />,
    title: 'Расписание, которое не ломается',
    description: 'Создавайте групповые и индивидуальные занятия в наглядном календаре. Назначайте кабинеты, переносите уроки в один клик. Neosmart сам проверяет конфликты и не дает поставить два занятия в одно время.',
    demo: 'schedule'
  },
  {
    icon: <SubscriptionIcon className="w-8 h-8" />,
    title: 'Система сама считает абонементы',
    description: 'Главное отличие от других CRM. Продавайте абонементы на 4, 8, 12 занятий. Система сама отследит остаток, предупредит об окончании и позволит "заморозить" абонемент, если ученик заболел.',
    demo: 'subscription'
  },
  {
    icon: <FinanceIcon className="w-8 h-8" />,
    title: 'Полная прозрачность финансов',
    description: 'Панель для руководителя, которая показывает главное: сколько денег в кассе, кто из учеников должен оплатить, какие курсы приносят больше прибыли. Принимайте решения на основе цифр, а не догадок.',
    demo: 'finance'
  }
];

// Демо: расписание по аудиториям — явно блоки уроков и отметка посещаемости
const lessonLabels: (string | null)[][] = [
  ['Англ.', '—', 'Матем.', '—', 'Англ.'],
  ['—', 'Англ.', '—', 'Матем.', '—'],
  ['Матем.', '—', 'Англ.', '—', 'Матем.']
];

const DemoAttendance: React.FC = () => (
  <div className="demo-attendance relative py-6 px-4 lg:py-8 lg:px-10 flex flex-col justify-center">
    <div className="text-[11px] text-white/50 mb-2 font-medium demo-attendance-label">Расписание по аудиториям</div>
    <div className="text-[9px] text-white/40 mb-3">Каждый блок — урок. Выберите урок, чтобы отметить посещаемость.</div>
    <div className="flex gap-2 demo-attendance-grid">
      {/* Строки времени слева */}
      <div className="flex flex-col gap-1.5 justify-around shrink-0 pt-[18px]">
        {['10:00', '11:00', '12:00'].map((t) => (
          <div key={t} className="text-[8px] text-white/40 h-[22px] flex items-center">{t}</div>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-5 gap-1.5">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт'].map((day, colIndex) => (
          <div key={day} className="flex flex-col gap-1.5 demo-attendance-col">
            <div className="text-[9px] text-white/40 text-center h-5">{day}</div>
            {[0, 1, 2].map((row) => {
              const label = lessonLabels[row][colIndex];
              const isActive = colIndex === 1 && row === 1;
              return (
                <div
                  key={row}
                  className={`rounded-md min-h-[22px] flex items-center justify-center demo-attendance-cell px-1 ${
                    isActive ? 'demo-attendance-active bg-[#5B7CFF]/80 shadow-lg shadow-[#5B7CFF]/25 text-white text-[9px] font-medium' : 'bg-white/[0.06] text-white/50 text-[8px]'
                  }`}
                  style={{ animationDelay: `${(colIndex * 3 + row) * 0.06}s` }}
                >
                  {label || '—'}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
    <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#5B7CFF]/15 border border-[#5B7CFF]/25 px-3 py-2 demo-attendance-hint">
      <svg className="w-4 h-4 shrink-0 text-[#5B7CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
      <span className="text-[10px] text-white/90">Клик по уроку в сетке → отметить, кто пришёл</span>
    </div>
  </div>
);

const DemoSchedule: React.FC = () => (
  <div className="py-6 px-4 lg:py-8 lg:px-10 flex flex-col justify-center demo-schedule max-w-sm mx-auto">
    <div className="text-[11px] text-white/50 mb-3 font-medium demo-schedule-row" style={{ animationDelay: '0.05s' }}>
      Добавить урок в расписание
    </div>
    {/* Блоки уже стоящих уроков в этот день — контекст «расписание» */}
    <div className="flex flex-wrap gap-1.5 mb-4 demo-schedule-row" style={{ animationDelay: '0.1s' }}>
      <span className="text-[9px] text-white/40">Уже в расписании:</span>
      <div className="flex flex-wrap gap-1.5">
        <span className="px-2 py-1 rounded-md bg-white/[0.08] text-[9px] text-white/80 border border-white/10">Англ. 10:00</span>
        <span className="px-2 py-1 rounded-md bg-white/[0.08] text-[9px] text-white/80 border border-white/10">Матем. 14:00</span>
        <span className="px-2 py-1 rounded-md bg-white/[0.08] text-[9px] text-white/80 border border-white/10">Физра 16:00</span>
      </div>
    </div>
    {/* Поля нового урока */}
    <div className="space-y-2.5">
      <div className="flex gap-2 demo-schedule-row" style={{ animationDelay: '0.2s' }}>
        <span className="text-[9px] text-white/40 w-16 shrink-0 pt-1.5">Урок</span>
        <div className="flex-1 h-7 rounded-lg bg-white/[0.06] border border-white/[0.08]" />
      </div>
      <div className="flex gap-2 demo-schedule-row" style={{ animationDelay: '0.28s' }}>
        <span className="text-[9px] text-white/40 w-16 shrink-0 pt-1.5">Дата</span>
        <div className="flex-1 h-7 rounded-lg bg-white/[0.06] border border-white/[0.08]" />
      </div>
      <div className="flex gap-2 demo-schedule-row" style={{ animationDelay: '0.36s' }}>
        <span className="text-[9px] text-white/40 w-16 shrink-0 pt-1.5">Время</span>
        <div className="flex-1 h-7 rounded-lg bg-white/[0.06] border border-white/[0.08]" />
      </div>
      <div className="flex gap-2 demo-schedule-row" style={{ animationDelay: '0.44s' }}>
        <span className="text-[9px] text-white/40 w-16 shrink-0 pt-1.5">Аудитория</span>
        <div className="flex-1 h-7 rounded-lg bg-white/[0.06] border border-white/[0.08]" />
      </div>
    </div>
    {/* Результат проверки: конфликтов нет */}
    <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#7CF2C2]/10 border border-[#7CF2C2]/20 px-3 py-2 demo-schedule-ok">
      <svg className="w-4 h-4 shrink-0 text-[#7CF2C2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>
        <span className="text-[10px] font-semibold text-[#7CF2C2] block">Конфликтов не обнаружено</span>
        <span className="text-[9px] text-white/50">Время и аудитория свободны</span>
      </div>
    </div>
    <div className="mt-4 flex justify-end">
      <div className="h-9 px-5 rounded-xl demo-schedule-btn shadow-lg shadow-[#5B7CFF]/25 flex items-center justify-center text-[11px] font-semibold text-white">
        Сохранить
      </div>
    </div>
  </div>
);

const DemoFinance: React.FC = () => (
  <div className="py-6 px-4 lg:py-8 lg:px-10 flex flex-col justify-center gap-6 max-w-md mx-auto">
    <div>
      <div className="text-[11px] text-white/50 mb-2">История баланса</div>
      <div className="h-14 rounded-xl bg-white/[0.03] p-2">
        <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cs-chart1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5B7CFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#5B7CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="demo-finance-fill" d="M0,40 Q30,35 60,38 T120,20 T180,25 L200,25 L200,48 L0,48 Z" fill="url(#cs-chart1)" />
          <path className="demo-finance-line-stroke" d="M0,40 Q30,35 60,38 T120,20 T180,25 L200,25" fill="none" stroke="#5B7CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    <div>
      <div className="text-[11px] text-white/50 mb-2">История активности</div>
      <div className="h-12 rounded-xl bg-white/[0.03] p-2">
        <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cs-chart2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7CF2C2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#7CF2C2" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="demo-finance-line-2 demo-finance-fill" d="M0,30 Q50,25 100,28 T200,15 L200,40 L0,40 Z" fill="url(#cs-chart2)" />
          <path className="demo-finance-line-2 demo-finance-line-stroke" d="M0,30 Q50,25 100,28 T200,15" fill="none" stroke="#7CF2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </div>
);

const DemoSubscription: React.FC = () => (
  <div className="py-6 px-4 lg:py-8 lg:px-10 flex flex-col justify-center demo-subscription max-w-sm mx-auto">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[#5B7CFF]/20 flex items-center justify-center text-sm font-semibold text-[#5B7CFF]">
        К
      </div>
      <div>
        <div className="text-sm font-semibold text-white">Камилла</div>
        <div className="text-[10px] text-white/50">Абонемент не назначен</div>
      </div>
    </div>
    <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] demo-subscription-modal overflow-hidden">
      <div className="px-3 py-2 border-b border-white/[0.08] text-[11px] font-medium text-white">
        Назначить абонемент
      </div>
      <div className="p-3 space-y-2">
        <div className="demo-subscription-option h-8 rounded-lg bg-[#5B7CFF]/15 border border-[#5B7CFF]/30 flex items-center px-3 text-[10px] text-[#7CF2C2] font-medium">
          Месяц английского
        </div>
        <div className="h-7 rounded-lg bg-white/[0.04] text-[10px] text-white/50 flex items-center px-3">
          8 занятий
        </div>
      </div>
    </div>
  </div>
);

const DEMO_MAP = {
  attendance: DemoAttendance,
  schedule: DemoSchedule,
  finance: DemoFinance,
  subscription: DemoSubscription
} as const;

interface SolutionRowProps {
  solution: (typeof solutions)[0];
  index: number;
}

const SolutionRow: React.FC<SolutionRowProps> = ({ solution, index }) => {
  const Demo = DEMO_MAP[solution.demo as keyof typeof DEMO_MAP];
  const isVisualLeft = index % 2 === 0;
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 lg:py-16">
      {/* Блок с демо — без рамки, свечение не обрезаем */}
      <div className={`relative overflow-visible ${!isVisualLeft ? 'lg:order-2' : ''}`}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5B7CFF]/[0.07] to-[#7CF2C2]/[0.05] blur-2xl -z-10 scale-90" aria-hidden />
        <div className="relative rounded-2xl overflow-visible">
          {Demo && <Demo />}
        </div>
      </div>

      {/* Текст — номер, иконка, заголовок, описание */}
      <div className={!isVisualLeft ? 'lg:order-1' : ''}>
        <span className="text-[13px] font-semibold text-white/30 tracking-widest">{num}</span>
        <div className="flex items-center gap-3 mt-2 mb-4">
          <span className="text-[#7CF2C2]">{solution.icon}</span>
          <h3 className="text-2xl lg:text-3xl font-bold text-white">{solution.title}</h3>
        </div>
        <p className="text-[#A0A7B4] text-base lg:text-lg leading-relaxed max-w-xl">
          {solution.description}
        </p>
      </div>
    </div>
  );
};

const CoreSolutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 md:py-28 relative overflow-visible">
      <div className="relative max-w-6xl xl:max-w-7xl mx-auto w-full">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">Единая система для решения ключевых задач</h2>
          <p className="mt-4 text-lg text-[#A0A7B4]">
            Neosmart объединяет все процессы, чтобы вы управляли центром, а не тонули в хаосе.
          </p>
        </AnimatedSection>

        <AnimatedSection className="space-y-0">
          {solutions.map((solution, index) => (
            <SolutionRow key={index} solution={solution} index={index} />
          ))}
        </AnimatedSection>
      </div>

      <style>{`
        /* ——— Attendance: каскад появление ячеек, пульс активной с подсветкой ——— */
        .demo-attendance-label { opacity: 0; transform: translateY(6px); animation: cs-fade-up 0.5s ease 0.1s forwards; }
        .demo-attendance-cell {
          opacity: 0;
          transform: translateY(8px);
          animation: cs-cell-in 0.45s ease forwards;
          transition: box-shadow 0.4s ease;
        }
        .demo-attendance-active {
          animation: cs-cell-in 0.45s ease forwards, cs-pulse-glow 2.5s ease-in-out infinite;
          animation-fill-mode: forwards;
        }
        .demo-attendance-hint { opacity: 0; animation: cs-fade-up 0.4s ease 0.5s forwards; }

        /* ——— Schedule: каскад строк, подсветка «Конфликтов не обнаружено», градиент на кнопке ——— */
        .demo-schedule-row {
          opacity: 0;
          transform: translateY(10px);
          animation: cs-fade-up 0.5s ease forwards;
        }
        .demo-schedule-ok { opacity: 0; transform: translateY(6px); animation: cs-fade-up 0.5s ease 0.65s forwards, cs-glow-text 3s ease-in-out 1.2s infinite; }
        .demo-schedule-btn {
          opacity: 0;
          transform: translateY(8px);
          background: linear-gradient(90deg, #5B7CFF 0%, #7CF2C2 50%, #5B7CFF 100%);
          background-size: 200% 100%;
          animation: cs-btn-in 0.5s ease 1s forwards, cs-gradient-shift 4s ease-in-out 1.5s infinite;
        }
        .demo-schedule-btn { box-shadow: 0 4px 20px rgba(91, 124, 255, 0.25); }
        .demo-schedule:hover .demo-schedule-btn { box-shadow: 0 6px 24px rgba(91, 124, 255, 0.35); transition: box-shadow 0.3s ease; }

        /* ——— Finance: линия рисуется, заливка появляется после ——— */
        .demo-finance-line-stroke { stroke-dasharray: 400; stroke-dashoffset: 400; animation: cs-draw 1.6s ease-out forwards; }
        .demo-finance-line-2.demo-finance-line-stroke { animation-delay: 0.35s; }
        .demo-finance-fill { opacity: 0; animation: cs-fill-in 0.6s ease 1s forwards; }
        .demo-finance-line-2.demo-finance-fill { animation-delay: 1.35s; }

        /* ——— Subscription: модалка + мягкий пульс выбранного варианта ——— */
        .demo-subscription-modal { opacity: 0; transform: scale(0.96); animation: cs-modal-in 0.55s ease 0.4s forwards; }
        .demo-subscription-option {
          animation: cs-option-pulse 3s ease-in-out 1s infinite;
        }

        @keyframes cs-fade-up { to { opacity: 1; transform: translateY(0); } }
        @keyframes cs-cell-in { to { opacity: 1; transform: translateY(0); } }
        @keyframes cs-pulse-glow {
          0%, 100% { opacity: 1; box-shadow: 0 4px 16px rgba(91, 124, 255, 0.25); }
          50% { opacity: 0.92; box-shadow: 0 4px 24px rgba(91, 124, 255, 0.4); }
        }
        @keyframes cs-fade-in { to { opacity: 1; } }
        @keyframes cs-glow-text {
          0%, 100% { text-shadow: 0 0 12px rgba(124, 242, 194, 0.2); }
          50% { text-shadow: 0 0 20px rgba(124, 242, 194, 0.4); }
        }
        @keyframes cs-btn-in { to { opacity: 1; transform: translateY(0); } }
        @keyframes cs-gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes cs-draw { to { stroke-dashoffset: 0; } }
        @keyframes cs-fill-in { to { opacity: 1; } }
        @keyframes cs-modal-in { to { opacity: 1; transform: scale(1); } }
        @keyframes cs-option-pulse {
          0%, 100% { box-shadow: 0 0 0 1px rgba(91, 124, 255, 0.3); }
          50% { box-shadow: 0 0 0 1px rgba(91, 124, 255, 0.5), 0 0 12px rgba(91, 124, 255, 0.15); }
        }
      `}</style>
    </section>
  );
};

export default CoreSolutions;

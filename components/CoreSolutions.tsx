import React, { useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import StudentIcon from './icons/StudentIcon';
import ScheduleIcon from './icons/ScheduleIcon';
import SubscriptionIcon from './icons/SubscriptionIcon';
import FinanceIcon from './icons/FinanceIcon';

// Video paths from public folder
const videoAttendance = '/screens/Отметить посещаемость на уроке в расписании.mp4';
const videoSchedule = '/screens/Запланировать индивидуальный урок в расписании.mp4';
const videoSubscription = '/screens/Добавление абонемента студенту.mp4';
const videoPayment = '/screens/Добавить оплату наличными для студента.mp4';

const solutions = [
    {
        icon: <StudentIcon className="w-8 h-8" />,
        title: 'Студенты, платежи и посещаемость',
        description: 'Вся информация в одном месте. Ведите базу учеников, отслеживайте баланс каждого, отмечайте посещения. Система автоматически списывает занятия, избавляя от ручных расчетов в Excel.',
        video: videoAttendance
    },
    {
        icon: <ScheduleIcon className="w-8 h-8" />,
        title: 'Расписание, которое не ломается',
        description: 'Создавайте групповые и индивидуальные занятия в наглядном календаре. Назначайте кабинеты, переносите уроки в один клик. Neosmart сам проверяет конфликты и не дает поставить два занятия в одно время.',
        video: videoSchedule
    },
    {
        icon: <SubscriptionIcon className="w-8 h-8" />,
        title: 'Система сама считает абонементы',
        description: 'Главное отличие от других CRM. Продавайте абонементы на 4, 8, 12 занятий. Система сама отследит остаток, предупредит об окончании и позволит "заморозить" абонемент, если ученик заболел.',
        video: videoSubscription
    },
    {
        icon: <FinanceIcon className="w-8 h-8" />,
        title: 'Полная прозрачность финансов',
        description: 'Панель для руководителя, которая показывает главное: сколько денег в кассе, кто из учеников должен оплатить, какие курсы приносят больше прибыли. Принимайте решения на основе цифр, а не догадок.',
        video: videoPayment
    }
];

const START_TIME = 10.5; // Пропускаем первые 10 секунд
const END_TRIM = 3; // Обрезаем последние 3 секунды
const PLAYBACK_RATE = 2; // Скорость воспроизведения 2x

interface VideoCardProps {
  solution: typeof solutions[0];
}

const VideoCard: React.FC<VideoCardProps> = ({ solution }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const endTimeRef = useRef<number>(0);
  const isReadyRef = useRef<boolean>(false);

  // Устанавливаем src программно после монтирования
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasSetInitialTime = false;

    // Настраиваем обработчики до загрузки src
    const handleLoadedMetadata = () => {
      video.playbackRate = PLAYBACK_RATE;
      endTimeRef.current = video.duration - END_TRIM;
    };

    const handleCanPlay = () => {
      if (!hasSetInitialTime) {
        hasSetInitialTime = true;
        video.currentTime = START_TIME;
      }
    };

    const handleSeeked = () => {
      if (video.currentTime >= START_TIME - 0.1 && !isReadyRef.current) {
        isReadyRef.current = true;
        setIsReady(true);
        video.play().catch(() => {});
      }
    };

    const handleTimeUpdate = () => {
      // Принудительно возвращаем на START_TIME если начали с начала
      if (video.currentTime < START_TIME && !hasSetInitialTime) {
        video.currentTime = START_TIME;
        hasSetInitialTime = true;
      }
      
      // Обрезка конца
      if (endTimeRef.current > 0 && video.currentTime >= endTimeRef.current) {
        video.currentTime = START_TIME;
      }
    };

    const handleEnded = () => {
      video.currentTime = START_TIME;
      video.play().catch(() => {});
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // ТЕПЕРЬ устанавливаем src
    video.src = solution.video;
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [solution.video]);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1.5">
      <div className="relative overflow-hidden bg-[#0B0F1A] rounded-t-xl">
        {/* Loader пока видео не готово */}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0B0F1A] min-h-[200px]">
            <div className="w-10 h-10 border-3 border-[#7CF2C2] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <video
          ref={videoRef}
          muted
          playsInline
          className={`w-full h-auto block transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Overlay для закрытия лого Arcade */}
      </div>
      <div className="p-6 pt-5 space-y-2">
        <div className="flex items-center gap-3">
          <div className="text-[#7CF2C2]">{solution.icon}</div>
          <h3 className="text-xl font-bold text-white">{solution.title}</h3>
        </div>
        <p className="text-[#A0A7B4] text-sm leading-relaxed">{solution.description}</p>
      </div>
    </div>
  );
};

const CoreSolutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 md:py-28">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Единая система для решения ключевых задач</h2>
        <p className="mt-4 text-lg text-[#A0A7B4]">Neosmart объединяет все процессы, чтобы вы управляли центром, а не тонули в хаосе.</p>
      </AnimatedSection>
        
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <VideoCard key={index} solution={solution} />
        ))}
      </AnimatedSection>
    </section>
  );
};

export default CoreSolutions;

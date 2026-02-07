import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const videos = [
  {
    id: 'hpi1M9aGxw01j6LFiqDy',
    title: 'Добавление учителя',
    description: 'Как внести нового преподавателя и присвоить предмет для вашего учебного центра',
    category: 'Настройка'
  },
  {
    id: 'xb5hSvTiBhGlbCBuwoL4',
    title: 'Добавление аудитории',
    description: 'Как создать аудиторию для планирования занятий и выделить её в календаре',
    category: 'Настройка'
  },
  {
    id: 'RvpM66JckKgJKLSx9KEK',
    title: 'Создание учебной группы',
    description: 'Как сформировать группу с расписанием, предметом и преподавателем',
    category: 'Расписание'
  },
  {
    id: 'MYXBktyqCUyPmw2NEJK3',
    title: 'Индивидуальный урок',
    description: 'Как запланировать индивидуальный урок, выбрать преподавателя и время',
    category: 'Расписание'
  },
  {
    id: 'Sv0FVOVAYTaTJJM0F5CI',
    title: 'Отметка посещаемости',
    description: 'Как быстро отметить и сохранить посещаемость для урока из расписания',
    category: 'Студенты'
  },
  {
    id: 'hAahya10BksLSYF4rhxF',
    title: 'Добавление абонемента',
    description: 'Как быстро оформить новый абонемент для ученика из профиля',
    category: 'Финансы'
  },
  {
    id: '4PZpjTKSUVLYAtMyQBpq',
    title: 'Скидки и абонементы',
    description: 'Как создать скидку и назначить абонемент ученику',
    category: 'Финансы'
  },
  {
    id: 'a7OF0N8MSeTQjJ83oyHl',
    title: 'Добавление оплаты',
    description: 'Как быстро зарегистрировать новый платёж через панель управления',
    category: 'Финансы'
  },
  {
    id: '4ZS8XIAOuFmqWDNNMJB2',
    title: 'Ставки учителей',
    description: 'Как назначить индивидуальные и групповые ставки для расчёта зарплаты',
    category: 'Финансы'
  },
  {
    id: 'ykQk6lfvU4SguW99hFRV',
    title: 'Добавление филиала',
    description: 'Как добавить и управлять филиалами образовательного центра',
    category: 'Настройка'
  },
  {
    id: 'FsecSj8QJD6Rc9SXPsqy',
    title: 'Приглашение сотрудников',
    description: 'Как пригласить пользователя и назначить ему роль и доступ',
    category: 'Команда'
  },
  {
    id: 'deHQtB13fHPAXdCwsaAV',
    title: 'Работа с лидами',
    description: 'Как добавить и сопровождать потенциального клиента через CRM',
    category: 'CRM'
  }
];

const categories = ['Все', 'Настройка', 'Расписание', 'Студенты', 'Финансы', 'Команда', 'CRM'];

const GuidesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    // Set page title and meta tags
    document.title = 'Видео-гайды | Neosmart — CRM для образовательных центров';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Короткие интерактивные видео-уроки по работе с Neosmart CRM. Узнайте, как управлять расписанием, студентами, финансами и абонементами.');
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Видео-гайды | Neosmart');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Короткие интерактивные видео-уроки по работе с Neosmart CRM');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://neosmart.kz/guides');
    }

    // Add structured data for video collection
    const existingScript = document.querySelector('script[type="application/ld+json"]#videos-structured-data');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'videos-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": videos.map((video, index) => ({
          "@type": "VideoObject",
          "position": index + 1,
          "name": video.title,
          "description": video.description,
          "thumbnailUrl": `https://demo.arcade.software/${video.id}/thumbnail`,
          "contentUrl": `https://demo.arcade.software/${video.id}`,
          "embedUrl": `https://demo.arcade.software/${video.id}?embed`,
          "uploadDate": "2026-01-15",
          "duration": "PT2M",
          "publisher": {
            "@type": "Organization",
            "name": "Neosmart",
            "logo": {
              "@type": "ImageObject",
              "url": "https://neosmart.kz/logo/logo.png"
            }
          }
        }))
      });
      document.head.appendChild(script);
    }

    return () => {
      const script = document.querySelector('#videos-structured-data');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const filteredVideos = activeCategory === 'Все' 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  return (
    <div className="bg-[#0B0F1A] text-white min-h-screen">
      {/* Background Gradient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#5B7CFF] opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7CF2C2] opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B0F1A]/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-3 md:py-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3 md:pb-4">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img src="/logo/logo.png" alt="Neosmart" className="h-7 sm:h-8 w-auto" />
              <span className="text-lg sm:text-xl font-bold text-white">Neosmart</span>
            </Link>
            
            <Link 
              to="/" 
              className="flex items-center gap-2 text-[#A0A7B4] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">На главную</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#A0A7B4] bg-clip-text text-transparent">
            Видео-гайды
          </h1>
          <p className="mt-4 text-lg text-[#A0A7B4]">
            Короткие интерактивные уроки, которые покажут все возможности Neosmart
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#5B7CFF] to-[#7CF2C2] text-[#0B0F1A]'
                  : 'bg-white/5 text-[#A0A7B4] hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Video Grid */}
        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video.id)}
              className="group cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#7CF2C2]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7CF2C2]/10"
            >
              <div className="relative aspect-video bg-[#0B0F1A] overflow-hidden">
                {/* Arcade iframe для превью */}
                <iframe
                  src={`https://demo.arcade.software/${video.id}?embed&embed_mobile=tab&embed_desktop=inline`}
                  title={video.title}
                  frameBorder="0"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ colorScheme: 'light' }}
                />
                {/* Overlay для перехвата клика */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2.5 py-1 text-xs font-medium bg-[#0B0F1A]/70 backdrop-blur-sm rounded-full text-[#7CF2C2]">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-white group-hover:text-[#7CF2C2] transition-colors">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm text-[#A0A7B4] leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo/logo.png" alt="Neosmart" className="h-7 w-auto" />
              <span className="font-bold text-white">Neosmart</span>
            </div>
            <p className="text-sm text-[#A0A7B4]">© 2025 Neosmart. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-[#0B0F1A] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Закрыть
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`https://demo.arcade.software/${selectedVideo}?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true`}
              title="Video Guide"
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              className="w-full h-full"
              style={{ colorScheme: 'light' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GuidesPage;

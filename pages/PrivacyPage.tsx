import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    // Set page title and meta tags
    document.title = 'Политика конфиденциальности | Neosmart';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Политика конфиденциальности Neosmart. Информация о сборе, использовании и защите персональных данных пользователей.');
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Политика конфиденциальности | Neosmart');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Политика конфиденциальности Neosmart. Информация о защите персональных данных.');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://neosmart.kz/privacy');
    }
  }, []);

  return (
    <div className="bg-[#0B0F1A] text-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B0F1A]/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo/logo.png" alt="Neosmart" className="h-8 w-auto" />
              <span className="text-xl font-bold text-white">Neosmart</span>
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
      <main className="container mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-[#A0A7B4]">
            <p className="text-white/90 leading-relaxed">
              Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок сбора, использования, хранения и защиты персональной информации пользователей сайта и облачного сервиса Neosmart (далее — «Сервис», «Компания», «мы»).
            </p>
            
            <p>
              Политика применяется ко всем пользователям сайта <a href="https://neosmart.kz" className="text-[#7CF2C2] hover:underline">neosmart.kz</a> и всех связанных веб- и мобильных приложений.
            </p>
            
            <p>
              Используя Сервис, Пользователь подтверждает согласие на обработку своих персональных данных в соответствии с настоящей Политикой. Если Пользователь не согласен с условиями Политики, он обязан прекратить использование Сервиса.
            </p>
            
            <p>
              Все термины толкуются в соответствии с действующим законодательством Республики Казахстан.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Персональная информация Пользователей</h2>
              
              <p><strong className="text-white">1.1.</strong> Компания собирает, получает и обрабатывает персональные данные, предоставляемые Пользователями при регистрации, заполнении форм, подаче заявок и использовании функционала Сервиса.</p>
              
              <p><strong className="text-white">1.2.</strong> К персональным данным относятся:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>имя и фамилия</li>
                <li>номер телефона</li>
                <li>адрес электронной почты</li>
                <li>название организации</li>
                <li>реквизиты компании (при заключении договора)</li>
                <li>данные учетной записи</li>
                <li>платежные данные (обрабатываются платежными провайдерами)</li>
              </ul>
              
              <p><strong className="text-white">1.3.</strong> В рамках работы CRM Пользователь может хранить в системе данные своих клиентов, учеников, сотрудников, расписаний, финансов и иной информации. Такие данные обрабатываются исключительно в целях предоставления функционала Сервиса.</p>
              
              <p><strong className="text-white">1.4.</strong> Компания не проверяет достоверность предоставляемых данных и исходит из того, что Пользователь предоставляет актуальную и правдивую информацию.</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Цели обработки персональной информации</h2>
              
              <p>Персональные данные используются для:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>регистрации и авторизации в Сервисе</li>
                <li>оказания услуг CRM</li>
                <li>клиентской поддержки</li>
                <li>обработки платежей</li>
                <li>исполнения договорных обязательств</li>
                <li>повышения качества работы Сервиса</li>
                <li>обеспечения безопасности</li>
                <li>информирования об обновлениях и сервисных уведомлениях</li>
                <li>проведения статистических исследований (в обезличенном виде)</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Условия и способы обработки</h2>
              
              <p><strong className="text-white">3.1.</strong> Пользователь дает согласие на обработку данных путем регистрации или отправки любой формы на сайте.</p>
              
              <p><strong className="text-white">3.2.</strong> Обработка включает:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>сбор</li>
                <li>запись</li>
                <li>систематизацию</li>
                <li>хранение</li>
                <li>обновление</li>
                <li>использование</li>
                <li>передачу</li>
                <li>обезличивание</li>
                <li>удаление</li>
              </ul>
              
              <p><strong className="text-white">3.3.</strong> Компания обеспечивает конфиденциальность данных, за исключением случаев, прямо предусмотренных законодательством.</p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Передача данных третьим лицам</h2>
              
              <p>Передача возможна только:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>платежным системам</li>
                <li>хостинг-провайдерам</li>
                <li>подрядчикам, обеспечивающим работу Сервиса</li>
                <li>государственным органам по законному требованию</li>
                <li>при согласии Пользователя</li>
              </ul>
              
              <p className="mt-4">Компания не продает и не передает персональные данные третьим лицам в коммерческих целях.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Меры защиты информации</h2>
              
              <p>Компания принимает необходимые правовые, организационные и технические меры, включая:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>HTTPS / TLS шифрование</li>
                <li>защищенные базы данных</li>
                <li>разграничение доступа сотрудников</li>
                <li>резервное копирование</li>
                <li>мониторинг безопасности</li>
                <li>аудит логов</li>
                <li>защиту от несанкционированного доступа</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Права Пользователя</h2>
              
              <p>Пользователь имеет право:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>получить сведения о своих данных</li>
                <li>требовать исправления</li>
                <li>требовать удаления</li>
                <li>ограничить обработку</li>
                <li>отозвать согласие</li>
                <li>удалить аккаунт</li>
              </ul>
              
              <p className="mt-4">Запросы направляются по контактам Компании.</p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Cookies и технические данные</h2>
              
              <p>Сервис использует cookies и технические данные:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-адрес</li>
                <li>тип устройства</li>
                <li>браузер</li>
                <li>логи действий</li>
              </ul>
              
              <p className="mt-4">Эти данные используются в обезличенном виде для аналитики, стабильности работы и безопасности.</p>
              
              <p>Пользователь может отключить cookies в настройках браузера.</p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Хранение данных и расположение серверов</h2>
              
              <p>Персональные данные хранятся на защищенных серверах.</p>
              
              <p>Серверы могут располагаться:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>на территории Республики Казахстан</li>
                <li>либо в дата-центрах партнеров, обеспечивающих уровень защиты не ниже требований законодательства</li>
              </ul>
              
              <p className="mt-4">Данные хранятся в течение срока использования Сервиса и разумного периода после прекращения использования.</p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">9. Разрешение споров</h2>
              
              <p>Все споры разрешаются в соответствии с законодательством Республики Казахстан.</p>
              
              <p>Обязателен досудебный порядок урегулирования.</p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">10. Дополнительные условия</h2>
              
              <p>Компания вправе вносить изменения в Политику.</p>
              
              <p>Актуальная версия всегда размещается на сайте.</p>
              
              <p>Продолжение использования Сервиса означает согласие с новой редакцией.</p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo/logo.png" alt="Neosmart" className="h-7 w-auto" />
              <span className="font-bold text-white">Neosmart</span>
            </div>
            <p className="text-sm text-[#A0A7B4]">&copy; {new Date().getFullYear()} Neosmart. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;

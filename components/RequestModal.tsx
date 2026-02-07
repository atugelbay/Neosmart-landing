import React, { useState } from 'react';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestModal: React.FC<RequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // ============================================
  // НАСТРОЙКА TELEGRAM БОТА
  // ============================================
  // Как получить эти данные:
  // 
  // 1. Создайте бота через @BotFather в Telegram:
  //    - Напишите /newbot
  //    - Введите имя бота (например: Neosmart Leads)
  //    - Введите username бота (например: neosmart_leads_bot)
  //    - Получите TOKEN (выглядит как: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz)
  //
  // 2. Получите CHAT_ID:
  //    - Напишите что-нибудь своему боту в Telegram
  //    - Откройте в браузере: https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
  //    - Найдите "chat":{"id": ЧИСЛА} - это ваш CHAT_ID
  //    - Или используйте @userinfobot для получения вашего chat_id
  //
  // 3. Замените значения ниже:
  
  const TELEGRAM_BOT_TOKEN = '8333512484:AAFErKkT62glOui-YTKFk8IHs5Lk_bBVqkk'; // Замените на токен от @BotFather
  const TELEGRAM_CHAT_ID = '217841973';     // Замените на ваш chat_id

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Формируем красивое сообщение для Telegram
      const message = `
🆕 НОВАЯ ЗАЯВКА С САЙТА

👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
🏢 Компания: ${formData.company || 'Не указана'}

⏰ Дата: ${new Date().toLocaleString('ru-RU')}
🔗 Источник: ${window.location.href}
      `.trim();

      // Отправляем в Telegram
      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        }),
      });

      const data = await response.json();

      if (!data.ok) {
        throw new Error(data.description || 'Ошибка отправки в Telegram');
      }

      setIsSuccess(true);
      setFormData({ name: '', phone: '', company: '' });
      
      // Google Ads conversion tracking
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion();
      }
      
      // Закрыть через 2 секунды
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Telegram send error:', err);
      setError('Ошибка отправки. Пожалуйста, напишите нам в WhatsApp или позвоните.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="relative bg-[#12151F] border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-md animate-modalIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6B6B6B] hover:text-white transition-colors"
          aria-label="Закрыть модальное окно"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSuccess ? (
          // Success state
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#7CF2C2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#7CF2C2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
            <p className="text-[#A0A7B4]">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          // Form
          <>
            <h3 id="modal-title" className="text-2xl font-bold text-white mb-2">Запросить звонок</h3>
            <p className="text-[#A0A7B4] mb-6">Оставьте контакты — перезвоним в течение часа</p>

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Форма запроса звонка">
              <div>
                <label className="block text-sm text-[#A0A7B4] mb-1">Ваше имя *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#6B6B6B] focus:outline-none focus:border-[#5B7CFF] transition-colors"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <label className="block text-sm text-[#A0A7B4] mb-1">Телефон *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#6B6B6B] focus:outline-none focus:border-[#5B7CFF] transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm text-[#A0A7B4] mb-1">Название центра</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#6B6B6B] focus:outline-none focus:border-[#5B7CFF] transition-colors"
                  placeholder="Необязательно"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#5B7CFF] hover:bg-[#4A6AE8] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>

              <p className="text-xs text-[#6B6B6B] text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modalIn {
          animation: modalIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default RequestModal;

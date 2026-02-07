import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import CoreSolutions from './components/CoreSolutions';
import UseCases from './components/UseCases';
import Growth from './components/Growth';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import Onboarding from './components/Onboarding';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import RequestModal from './components/RequestModal';
import Preloader from './components/Preloader';
import HexagonPattern from './components/HexagonPattern';
import ScrollGradient from './components/ScrollGradient';
import WhatsAppWidget from './components/WhatsAppWidget';

// Modal Context
interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

// Global Cursor Glow Component
const GlobalCursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(91, 124, 255, 0.12) 0%, transparent 70%)',
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <div className="text-white relative min-h-screen overflow-x-clip">
        <Preloader />
        {/* Global Cursor Glow */}
        <GlobalCursorGlow />
        {/* Фон: один «путь» сверху вниз — при скролле меняется (небо → земля), поверх mesh + гексагоны */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <ScrollGradient />
          <HexagonPattern />
        </div>
        
        <div className="relative z-10">
          <Header />
          <main className="px-6 md:px-12 lg:px-24">
            <Hero />
            <Problems />
            <CoreSolutions />
            <UseCases />
            <Growth />
            <Pricing />
            <Comparison />
            <Onboarding />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </div>

        {/* Request Modal */}
        <RequestModal isOpen={isModalOpen} onClose={closeModal} />
        
        {/* WhatsApp Widget */}
        <WhatsAppWidget />
      </div>
    </ModalContext.Provider>
  );
};

export default App;

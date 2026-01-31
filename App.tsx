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

  useEffect(() => {
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
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
      <div className="bg-[#0B0F1A] text-white relative min-h-screen overflow-x-clip">
        {/* Global Cursor Glow */}
        <GlobalCursorGlow />
        {/* Background Gradient Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#5B7CFF] opacity-10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-96 right-0 w-96 h-96 bg-[#7CF2C2] opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5B7CFF] opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
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

        <style>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </ModalContext.Provider>
  );
};

export default App;

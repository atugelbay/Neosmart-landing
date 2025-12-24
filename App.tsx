import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="bg-[#0B0F1A] text-white overflow-x-hidden relative">
      {/* Background Gradient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#5B7CFF] opacity-10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-96 right-0 w-96 h-96 bg-[#7CF2C2] opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#5B7CFF] opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      
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

      <style jsx global>{`
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
  );
};

export default App;

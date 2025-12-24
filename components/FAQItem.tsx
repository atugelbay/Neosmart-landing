import React from 'react';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-6"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <div className="flex-shrink-0 ml-4 text-[#A0A7B4]">
          {isOpen ? <MinusIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
        </div>
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-[#A0A7B4] px-6 pb-6">
          {answer}
        </p>
      </div>
       <style jsx>{`
        .transition-max-height {
            transition: max-height 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FAQItem;

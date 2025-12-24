import React, { ReactNode } from 'react';
import CheckIcon from './icons/CheckIcon';

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, description, benefits }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-[#7CF2C2]">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-[#A0A7B4] mt-1">{description}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 bg-[#7CF2C2]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <CheckIcon className="w-3 h-3 text-[#7CF2C2]" />
            </div>
            <span className="text-white/90">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseCaseCard;

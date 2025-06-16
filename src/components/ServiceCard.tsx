import React from 'react';
import { BookOpen, Vote, CreditCard, Globe, DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: 'book' | 'vote' | 'id-card' | 'globe';
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case 'book':
        return BookOpen;
      case 'vote':
        return Vote;
      case 'id-card':
        return CreditCard;
      case 'globe':
        return Globe;
      default:
        return BookOpen;
    }
  };

  const getIconColor = (): string => {
    switch (icon) {
      case 'book':
        return 'text-blue-600';
      case 'vote':
        return 'text-red-600';
      case 'id-card':
        return 'text-blue-700';
      case 'globe':
        return 'text-red-700';
      default:
        return 'text-blue-600';
    }
  };

  const getBgColor = (): string => {
    switch (icon) {
      case 'book':
        return 'bg-blue-50 hover:bg-blue-100';
      case 'vote':
        return 'bg-red-50 hover:bg-red-100';
      case 'id-card':
        return 'bg-blue-50 hover:bg-blue-100';
      case 'globe':
        return 'bg-red-50 hover:bg-red-100';
      default:
        return 'bg-blue-50 hover:bg-blue-100';
    }
  };

  const IconComponent = getIcon();

  return (
    <div className={`${getBgColor()} p-3 sm:p-4 md:p-6 rounded-xl border border-gray-200 
                     hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
                     cursor-pointer group`}>
      <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
        <div className={`${getIconColor()} group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </div>
        
        <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800 leading-tight">
          {title}
        </h3>
        
        <p className="text-xs sm:text-xs md:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
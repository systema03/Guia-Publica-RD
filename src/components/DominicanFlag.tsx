import React from 'react';

const DominicanFlag: React.FC = () => {
  return (
    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 
                    w-8 h-5 sm:w-12 sm:h-8 md:w-16 md:h-10 lg:w-20 lg:h-12
                    rounded shadow-lg overflow-hidden opacity-80 hover:opacity-100 
                    transition-opacity duration-300 z-30">
      <svg viewBox="0 0 3 2" className="w-full h-full">
        {/* Blue sections */}
        <rect x="0" y="0" width="1.2" height="0.8" fill="#002D62"/>
        <rect x="1.8" y="1.2" width="1.2" height="0.8" fill="#002D62"/>
        
        {/* Red sections */}
        <rect x="1.8" y="0" width="1.2" height="0.8" fill="#CE1126"/>
        <rect x="0" y="1.2" width="1.2" height="0.8" fill="#CE1126"/>
        
        {/* White cross */}
        <rect x="1.2" y="0" width="0.6" height="2" fill="white"/>
        <rect x="0" y="0.8" width="3" height="0.4" fill="white"/>
        
        {/* Center coat of arms (simplified) */}
        <circle cx="1.5" cy="1" r="0.25" fill="#DAA520" stroke="white" strokeWidth="0.05"/>
      </svg>
    </div>
  );
};

export default DominicanFlag;
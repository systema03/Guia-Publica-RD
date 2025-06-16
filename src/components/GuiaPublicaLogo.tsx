import React from 'react';

const GuiaPublicaLogo: React.FC = () => {
  return (
    <div className="mx-auto mb-6 flex justify-center">
      <div className="w-48 sm:w-56 md:w-64 flex items-center justify-center animate-spin-slow">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(50,50)">
            <path d="M-30,-10 L-10,-30 L10,-10 L30,-30 L30,10 L10,30 L-10,10 L-30,30 Z" 
                  fill="url(#colorfulGradient)" opacity="0.9"/>
            <circle cx="0" cy="0" r="8" fill="white"/>
          </g>
          <defs>
            <linearGradient id="colorfulGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="25%" stopColor="#10B981" stopOpacity="1" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
              <stop offset="75%" stopColor="#EF4444" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default GuiaPublicaLogo;

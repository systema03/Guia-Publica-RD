import React from 'react';

const GuiaPublicaLogo: React.FC = () => {
  return (
    <div className="mx-auto mb-6 flex justify-center">
      <img
        src="/1000870698-removebg-preview.png"
        alt="Guía Pública RD - Logo"
        width="256" 
        height="256" 
        className="w-48 sm:w-56 md:w-64 object-contain animate-spin-slow transition-all duration-300"
        style={{
          animation: 'propeller 4s linear infinite',
          backgroundColor: 'transparent',
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = `
            <div class="w-48 sm:w-56 md:w-64 flex items-center justify-center animate-spin-slow">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                <g transform="translate(50,50)">
                  <path d="M-30,-10 L-10,-30 L10,-10 L30,-30 L30,10 L10,30 L-10,10 L-30,30 Z" 
                        fill="url(#colorfulGradient)" opacity="0.9"/>
                  <circle cx="0" cy="0" r="8" fill="white"/>
                </g>
                <defs>
                  <linearGradient id="colorfulGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3B82F6" stop-opacity="1" />
                    <stop offset="25%" stop-color="#10B981" stop-opacity="1" />
                    <stop offset="50%" stop-color="#F59E0B" stop-opacity="1" />
                    <stop offset="75%" stop-color="#EF4444" stop-opacity="1" />
                    <stop offset="100%" stop-color="#8B5CF6" stop-opacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          `;
        }}
      />
    </div>
  );
};

export default GuiaPublicaLogo;

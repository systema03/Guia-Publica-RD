import React, { useEffect, useRef } from 'react';

const FloatingParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      container.innerHTML = '';

      // Create softer, more subtle particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const colors = [
          'rgba(59, 130, 246, 0.4)',    // Soft blue
          'rgba(239, 68, 68, 0.4)',     // Soft red
          'rgba(255, 255, 255, 0.6)',   // White
          'rgba(156, 163, 175, 0.3)'    // Soft gray
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          animation: float ${Math.random() * 6 + 8}s infinite linear;
          animation-delay: ${Math.random() * 10}s;
          box-shadow: 0 0 ${size * 3}px ${color.replace(/[\d.]+\)$/g, '0.2)')};
        `;
        container.appendChild(particle);
      }
    };

    createParticles();
    
    // Recreate particles periodically for continuous effect
    const interval = setInterval(createParticles, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) rotate(36deg) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-10vh) rotate(324deg) scale(1);
          }
          100% {
            transform: translateY(-20vh) rotate(360deg) scale(0);
            opacity: 0;
          }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      />
    </>
  );
};

export default FloatingParticles;
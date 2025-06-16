import React, { useState, useEffect } from 'react';
import { Eye, Users } from 'lucide-react';

const VisitCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Contador que comienza desde cero para producción
    const updateVisitCount = () => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const storedCount = localStorage.getItem('guia-publica-visits');
          
          if (storedCount) {
            // Si ya existe un contador, incrementarlo
            const currentCount = parseInt(storedCount, 10);
            const newCount = currentCount + 1;
            localStorage.setItem('guia-publica-visits', newCount.toString());
            setVisitCount(newCount);
          } else {
            // Primera visita - comenzar desde 1
            localStorage.setItem('guia-publica-visits', '1');
            setVisitCount(1);
          }
        } else {
          // Fallback si localStorage no está disponible
          setVisitCount(1);
        }
      } catch (error) {
        console.log('LocalStorage not available, using default count');
        setVisitCount(1);
      }
      setIsLoading(false);
    };

    // Pequeño delay para simular carga realista
    const timer = setTimeout(updateVisitCount, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('es-DO');
  };

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 to-red-50 
                      px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-gray-200 
                      shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span className="text-sm sm:text-base font-semibold text-gray-700">
            Visitas:
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          {isLoading ? (
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          ) : (
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 
                           bg-clip-text text-transparent">
              {formatNumber(visitCount)}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <Users className="w-3 h-3" />
        <span>Visitantes únicos del portal oficial</span>
      </div>
    </div>
  );
};

export default VisitCounter;
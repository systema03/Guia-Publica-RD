import React, { useState, useCallback, memo, lazy, Suspense } from 'react';
import { MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';

// Lazy load del ícono Sparkles
const Sparkles = lazy(() => import('lucide-react').then(mod => ({ default: mod.Sparkles })));

// Tipado para props del botón principal
interface ChatBotButtonProps {
  onClick: () => void;
}

// ✅ Tipado para props de IconWrapper
interface IconWrapperProps {
  isLoading: boolean;
  showConfirmation: boolean;
}

// Componente de ícono optimizado
const IconWrapper = memo(({ isLoading, showConfirmation }: IconWrapperProps) => {
  if (isLoading) return <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin flex-shrink-0" />;
  if (showConfirmation) return <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />;
  return <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />;
});

// Tooltip optimizado
const Tooltip = memo(() => (
  <div 
    className="absolute -top-12 left-1/2 transform -translate-x-1/2 
               bg-gray-900 text-white text-xs px-3 py-2 rounded-lg
               opacity-0 group-hover:opacity-100 transition-opacity duration-200
               pointer-events-none whitespace-nowrap z-50
               will-change-transform will-change-opacity
               after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 
               after:-translate-x-1/2 after:border-8 after:border-transparent 
               after:border-t-gray-900"
  >
    Haz clic para consultar con nuestro asistente virtual
  </div>
));

// Indicador de disponibilidad optimizado
const AvailabilityIndicator = memo(() => (
  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-green-600 font-medium">
    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
    <span>Asistente disponible</span>
  </div>
));

const ChatBotButton: React.FC<ChatBotButtonProps> = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await onClick();
      setShowConfirmation(true);
      requestAnimationFrame(() => {
        setTimeout(() => setShowConfirmation(false), 2000);
      });
    } finally {
      setIsLoading(false);
    }
  }, [onClick, isLoading]);

  const buttonText = isLoading 
    ? 'Conectando...' 
    : showConfirmation 
      ? '¡Conectado!' 
      : 'Consultar';

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative group">
        <Tooltip />

        <button
          onClick={handleClick}
          disabled={isLoading}
          aria-label="Consultar con el asistente virtual Guía Pública RD"
          className={`group relative overflow-hidden 
                     bg-gradient-to-br from-blue-600 via-blue-700 to-red-700 
                     border-2 border-blue-600 text-white 
                     px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3
                     text-xs sm:text-sm md:text-base font-bold rounded-lg sm:rounded-xl 
                     transition-all duration-300 ease-out uppercase tracking-wide 
                     shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/50 
                     hover:-translate-y-1 hover:from-blue-500 hover:via-blue-600 hover:to-red-600
                     active:-translate-y-0.5 transform-gpu
                     w-full max-w-[200px] sm:max-w-[240px]
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                     disabled:opacity-70 disabled:cursor-not-allowed
                     will-change-transform will-change-opacity
                     before:absolute before:inset-0 before:bg-gradient-to-r 
                     before:from-transparent before:via-white/30 before:to-transparent
                     before:-translate-x-full before:transition-transform before:duration-700
                     hover:before:translate-x-full`}
        >
          <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
            <IconWrapper isLoading={isLoading} showConfirmation={showConfirmation} />
            
            <span className="text-[10px] sm:text-xs md:text-sm font-bold">
              {buttonText}
            </span>
            
            {!isLoading && !showConfirmation && (
              <Suspense fallback={<div className="w-3 h-3 sm:w-4 sm:h-4" />}>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
              </Suspense>
            )}
          </span>
        </button>
      </div>

      <p className="text-[10px] sm:text-xs text-gray-700 text-center max-w-[220px] leading-snug px-2">
        Disponible 24/7 para ayudarte con Registro Civil, Electoral, Cédulas y Voto Exterior
      </p>

      <AvailabilityIndicator />
    </div>
  );
};

export default memo(ChatBotButton);

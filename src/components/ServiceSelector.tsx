import React, { memo } from 'react';
import { 
  Vote, 
  Plane, 
  Car, 
  Calculator, 
  Scale, 
  GraduationCap,
  Clock,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { PublicService } from '../types/services';

interface ServiceSelectorProps {
  activeService: PublicService | undefined;
  availableServices: PublicService[];
  upcomingServices: PublicService[];
  onServiceChange: (serviceId: string) => void;
  onOpenChatbot: () => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  activeService,
  availableServices,
  upcomingServices,
  onServiceChange,
  onOpenChatbot
}) => {
  const getServiceIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5" };
    
    switch (iconName) {
      case 'vote': return <Vote {...iconProps} />;
      case 'plane': return <Plane {...iconProps} />;
      case 'car': return <Car {...iconProps} />;
      case 'calculator': return <Calculator {...iconProps} />;
      case 'scale': return <Scale {...iconProps} />;
      case 'graduation-cap': return <GraduationCap {...iconProps} />;
      default: return <Vote {...iconProps} />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      {/* Active Service Selector */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Servicio Activo
          </h2>
        </div>

        {activeService && (
          <div className={`bg-gradient-to-r ${activeService.color.gradient} p-6 rounded-xl text-white mb-6`}>
            <div className="flex items-center gap-3 mb-3">
              {getServiceIcon(activeService.icon)}
              <h3 className="font-bold text-xl">{activeService.name}</h3>
            </div>
            <p className="text-white/90 text-sm mb-4">{activeService.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {activeService.features.map((feature, index) => (
                <span 
                  key={index}
                  className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Virtual Assistant Button */}
            <div className="text-center">
              <button
                onClick={onOpenChatbot}
                className="group relative overflow-hidden bg-white/20 backdrop-blur-sm
                           text-white px-8 py-4 rounded-xl font-bold text-lg
                           shadow-2xl hover:shadow-3xl hover:-translate-y-1 hover:bg-white/30
                           transition-all duration-300 ease-out
                           focus:outline-none focus:ring-4 focus:ring-white/30 focus:ring-opacity-50
                           before:absolute before:inset-0 before:bg-gradient-to-r 
                           before:from-transparent before:via-white/30 before:to-transparent
                           before:-translate-x-full before:transition-transform before:duration-700
                           hover:before:translate-x-full border-2 border-white/30
                           will-change-transform will-change-background-position"
                aria-label={`Abrir chat con asistente virtual de ${activeService.name}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Consultar</span>
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
              
              <p className="text-white/90 text-sm mt-3 max-w-md mx-auto">
                Disponible 24/7 para ayudarte con todos los servicios de {activeService.name}
              </p>

              {/* Status Indicator */}
              <div className="mt-4 flex items-center justify-center gap-2 text-white/80 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Asistente virtual activo y disponible</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Upcoming Services */}
      <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-amber-600" />
          <h3 className="text-lg font-bold text-gray-800">Próximamente Disponibles</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingServices.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-4 
                         opacity-60 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-gray-400">
                  {getServiceIcon(service.icon)}
                </div>
                <h4 className="font-semibold text-gray-600 text-sm leading-tight">
                  {service.name}
                </h4>
              </div>
              
              <p className="text-gray-500 text-xs mb-3 leading-relaxed">
                {service.shortDescription}
              </p>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-amber-600">
                  Muy Pronto
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Info Message */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">
                Expansión de Servicios
              </h4>
              <p className="text-blue-700 text-sm leading-relaxed">
                Actualmente disponible solo para la <strong>Junta Central Electoral (JCE)</strong>. 
                Próximamente más servicios públicos como Pasaportes, INTRANT, DGII, 
                Procuraduría y Ministerio de Educación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ServiceSelector);
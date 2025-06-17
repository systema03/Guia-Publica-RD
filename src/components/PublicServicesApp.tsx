import React from 'react';
import { useServices } from '../hooks/useServices';
import ServiceSelector from './ServiceSelector';
import { PublicService } from '../types/services';

interface PublicServicesAppProps {
  onOpenChatbot: () => void;
}

const PublicServicesApp: React.FC<PublicServicesAppProps> = ({ onOpenChatbot }) => {
  const {
    activeService,
    activeServiceId,
    availableServices,
    upcomingServices,
    changeService,
  } = useServices();

  return (
    <div className="w-full space-y-8">
      {/* Service Selection Interface with Integrated Virtual Assistant */}
      <ServiceSelector
        activeService={activeService as PublicService | undefined}
        availableServices={availableServices}
        upcomingServices={upcomingServices}
        onServiceChange={changeService}
        onOpenChatbot={onOpenChatbot}
      />
    </div>
  );
};

export default PublicServicesApp;


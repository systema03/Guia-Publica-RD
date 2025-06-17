import React from 'react';
import { useServices } from '../hooks/useServices';
import ServiceSelector from './ServiceSelector';

interface PublicServicesAppProps {
  onOpenChatbot: () => void;
}

/**
 * Main component for the Public Services Virtual Assistant
 * Manages the overall state and layout of the services application
 */
const PublicServicesApp: React.FC<PublicServicesAppProps> = ({ onOpenChatbot }) => {
  const {
    activeService,
    activeServiceId,
    availableServices,
    upcomingServices,
    changeService
  } = useServices();

  return (
    <div className="w-full space-y-8">
      {/* Service Selection Interface with Integrated Virtual Assistant */}
      <ServiceSelector
        activeService={activeService}
        availableServices={availableServices}
        upcomingServices={upcomingServices}
        onServiceChange={changeService}
        onOpenChatbot={onOpenChatbot}
      />
    </div>
  );
};

export default PublicServicesApp;

    </div>
  );
};

export default PublicServicesApp;

import { useState, useEffect } from 'react';
import { PublicService } from '../types/services';
import { publicServices, getServiceById } from '../data/services';

/**
 * Custom hook for managing public services state
 */
export const useServices = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('jce');
  const [services] = useState<PublicService[]>(publicServices);

  const activeService = getServiceById(activeServiceId);

  /**
   * Change the active service
   */
  const changeService = (serviceId: string) => {
    const service = getServiceById(serviceId);
    if (service && service.isActive) {
      setActiveServiceId(serviceId);
    }
  };

  /**
   * Get available (active) services
   */
  const availableServices = services.filter(service => service.isActive);

  /**
   * Get upcoming (inactive) services
   */
  const upcomingServices = services.filter(service => !service.isActive);

  return {
    activeService,
    activeServiceId,
    services,
    availableServices,
    upcomingServices,
    changeService
  };
};
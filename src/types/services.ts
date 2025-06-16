/**
 * Types for the public services system
 */

export interface PublicService {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  isActive: boolean;
  icon: string;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  welcomeMessage: string;
  features: string[];
}

export interface ServiceState {
  activeService: string | null;
  availableServices: PublicService[];
}
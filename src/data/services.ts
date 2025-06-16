import { PublicService } from '../types/services';

/**
 * Configuration for all Dominican Republic public services
 * Currently only JCE is active, others are planned for future releases
 */
export const publicServices: PublicService[] = [
  {
    id: 'jce',
    name: 'Junta Central Electoral (JCE)',
    description: 'Servicios esenciales y trámites legales en República Dominicana.',
    shortDescription: 'Registro Civil, Electoral y Cedulación',
    isActive: true,
    icon: 'vote',
    color: {
      primary: '#3B82F6',
      secondary: '#EF4444',
      gradient: 'from-blue-500 via-blue-600 to-red-600'
    },
    welcomeMessage: '¡Bienvenido al asistente virtual de la Junta Central Electoral! Estoy aquí para ayudarte con todos los servicios relacionados con registro civil, registro electoral, cedulación y voto en el exterior.',
    features: [
      'Registro Civil',
      'Registro Electoral', 
      'Cedulación',
      'Voto en el Exterior'
    ]
  },
  {
    id: 'pasaportes',
    name: 'Dirección General de Pasaportes',
    description: 'Servicios de emisión y renovación de pasaportes dominicanos',
    shortDescription: 'Pasaportes y documentos de viaje',
    isActive: false,
    icon: 'plane',
    color: {
      primary: '#10B981',
      secondary: '#059669',
      gradient: 'from-emerald-500 via-emerald-600 to-green-600'
    },
    welcomeMessage: 'Próximamente disponible - Servicios de pasaportes y documentos de viaje.',
    features: [
      'Solicitud de pasaporte',
      'Renovación de pasaporte',
      'Consulta de estatus',
      'Citas programadas'
    ]
  },
  {
    id: 'intrant',
    name: 'Instituto Nacional de Tránsito y Transporte Terrestre (INTRANT)',
    description: 'Servicios de licencias de conducir y regulación del tránsito',
    shortDescription: 'Licencias y servicios de tránsito',
    isActive: false,
    icon: 'car',
    color: {
      primary: '#F59E0B',
      secondary: '#D97706',
      gradient: 'from-amber-500 via-yellow-600 to-orange-600'
    },
    welcomeMessage: 'Próximamente disponible - Servicios de licencias de conducir y tránsito.',
    features: [
      'Licencias de conducir',
      'Renovación de licencias',
      'Multas de tránsito',
      'Registro vehicular'
    ]
  },
  {
    id: 'dgii',
    name: 'Dirección General de Impuestos Internos (DGII)',
    description: 'Servicios tributarios y fiscales de la República Dominicana',
    shortDescription: 'Servicios tributarios y fiscales',
    isActive: false,
    icon: 'calculator',
    color: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      gradient: 'from-violet-500 via-purple-600 to-indigo-600'
    },
    welcomeMessage: 'Próximamente disponible - Servicios tributarios y fiscales.',
    features: [
      'Declaración de impuestos',
      'RNC y cédula fiscal',
      'Consulta de deudas',
      'Facturación electrónica'
    ]
  },
  {
    id: 'procuraduria',
    name: 'Procuraduría General de la República',
    description: 'Servicios legales y de justicia del Estado dominicano',
    shortDescription: 'Servicios legales y de justicia',
    isActive: false,
    icon: 'scale',
    color: {
      primary: '#DC2626',
      secondary: '#B91C1C',
      gradient: 'from-red-500 via-red-600 to-rose-600'
    },
    welcomeMessage: 'Próximamente disponible - Servicios legales y de justicia.',
    features: [
      'Consultas legales',
      'Denuncias ciudadanas',
      'Servicios notariales',
      'Información jurídica'
    ]
  },
  {
    id: 'minerd',
    name: 'Ministerio de Educación (MINERD)',
    description: 'Servicios educativos y certificaciones académicas',
    shortDescription: 'Servicios educativos y certificaciones',
    isActive: false,
    icon: 'graduation-cap',
    color: {
      primary: '#0891B2',
      secondary: '#0E7490',
      gradient: 'from-cyan-500 via-blue-600 to-teal-600'
    },
    welcomeMessage: 'Próximamente disponible - Servicios educativos y certificaciones.',
    features: [
      'Certificaciones académicas',
      'Títulos y diplomas',
      'Registro de centros educativos',
      'Becas y programas'
    ]
  }
];

/**
 * Get service by ID
 */
export const getServiceById = (id: string): PublicService | undefined => {
  return publicServices.find(service => service.id === id);
};

/**
 * Get all active services
 */
export const getActiveServices = (): PublicService[] => {
  return publicServices.filter(service => service.isActive);
};

/**
 * Get all inactive services
 */
export const getInactiveServices = (): PublicService[] => {
  return publicServices.filter(service => !service.isActive);
};
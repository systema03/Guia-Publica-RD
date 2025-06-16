import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/20 p-3 sm:p-4 md:p-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
            <Shield className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium">Portal Oficial</span>
          </div>
          
          <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">809-717-5383</span>
          </div>
          
          <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">info@guiapublicard.com</span>
          </div>
          
          <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">Santo Domingo, RD</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <p className="text-white/80 text-xs">
            © 2025 Guía Pública RD - República Dominicana. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { Suspense, lazy } from 'react';
import GuiaPublicaLogo from './components/GuiaPublicaLogo';
import SEO from './components/SEO';

// Lazy load components
const FloatingParticles = lazy(() => import('./components/FloatingParticles'));
const DominicanFlag = lazy(() => import('./components/DominicanFlag'));
const Footer = lazy(() => import('./components/Footer'));
const PublicServicesApp = lazy(() => import('./components/PublicServicesApp'));

function App() {
  const openChatbot = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        window.open('https://app.fastbots.ai/embed/cmbocu9020gyamxk8oxuk2y5g', '_blank');
      });
    } else {
      setTimeout(() => {
        window.open('https://app.fastbots.ai/embed/cmbocu9020gyamxk8oxuk2y5g', '_blank');
      }, 0);
    }
  };

  return (
    <>
      <SEO />
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse-scale {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.08); 
          }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes propeller {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes rotate-glow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(239, 68, 68, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(239, 68, 68, 0.5), 0 0 30px rgba(59, 130, 246, 0.3);
          }
        }
        
        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
          will-change: transform, opacity;
        }
        
        .animate-pulse-scale {
          animation: pulse-scale 3s infinite;
          will-change: transform;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          will-change: transform, opacity;
        }
        
        .animate-spin-slow {
          animation: propeller 4s linear infinite;
          will-change: transform;
        }
        
        .backdrop-blur-glass {
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #3B82F6, #1E40AF, #EF4444, #DC2626, #3B82F6);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite, text-glow 2s ease-in-out infinite;
          will-change: background-position;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-red-600 
                    flex flex-col overflow-hidden relative">
        
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
        
        <Suspense fallback={null}>
          <DominicanFlag />
        </Suspense>
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-start p-4 pt-8">
          {/* Header Section */}
          <div className="text-center bg-white/95 backdrop-blur-glass 
                        p-6 md:p-8 rounded-2xl shadow-3xl transform translate-y-5 animate-slide-in 
                        w-full max-w-4xl border border-white/30 relative z-20 mb-8">
            
            {/* Logo and Title */}
            <div className="mb-6 relative animate-fade-in-up">
              <GuiaPublicaLogo />
              
              <div className="space-y-2 -mt-4">
                <h1 className="text-2xl md:text-4xl font-bold gradient-text leading-tight">
                  Guía Pública RD
                </h1>
                
                <p className="text-base md:text-lg text-gray-600 font-medium">
                  Portal de Servicios Públicos - República Dominicana
                </p>
                
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-700 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Public Services Application */}
          <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Suspense fallback={
              <div className="bg-white/95 backdrop-blur-glass rounded-2xl p-8 animate-pulse">
                <div className="h-8 w-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="space-y-4">
                  <div className="h-24 bg-gray-200 rounded-xl"></div>
                  <div className="h-24 bg-gray-200 rounded-xl"></div>
                </div>
              </div>
            }>
              <PublicServicesApp onOpenChatbot={openChatbot} />
            </Suspense>
          </div>
        </div>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default React.memo(App);
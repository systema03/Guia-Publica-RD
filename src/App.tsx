import React from 'react';
import GuiaPublicaLogo from './components/GuiaPublicaLogo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-red-600 
                  flex flex-col items-center justify-center p-4">
      <div className="bg-white/95 p-8 rounded-2xl shadow-xl text-center">
        <GuiaPublicaLogo />
        <h1 className="text-2xl font-bold text-blue-600 mt-4">
          Guía Pública RD
        </h1>
        <p className="text-gray-600 mt-2">
          Portal de Servicios Públicos
        </p>
      </div>
    </div>
  );
}

export default App;
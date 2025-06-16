import React, { useState, useEffect } from 'react';
import { Eye, Users, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos en milisegundos
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 segundo

const VisitCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<number>(0);

  const getCachedCount = (): number | null => {
    if (typeof window === 'undefined') return null;
    const cached = localStorage.getItem('visit-count-cache');
    if (!cached) return null;
    
    const { count, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return count;
    }
    return null;
  };

  const setCachedCount = (count: number) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('visit-count-cache', JSON.stringify({
      count,
      timestamp: Date.now()
    }));
  };

  const updateVisitCount = async (retryCount = 0) => {
    try {
      setError(null);
      
      // Verificar caché primero
      const cachedCount = getCachedCount();
      if (cachedCount !== null && Date.now() - lastUpdate < CACHE_DURATION) {
        setVisitCount(cachedCount);
        setIsLoading(false);
        return;
      }

      // Obtener la IP del visitante
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      if (!ipResponse.ok) throw new Error('No se pudo obtener la IP');
      const { ip } = await ipResponse.json();

      // Registrar la visita
      const { error: upsertError } = await supabase
        .from('visits')
        .upsert(
          { ip_address: ip },
          { onConflict: 'ip_address', ignoreDuplicates: true }
        );

      if (upsertError) throw new Error('Error al registrar visita');

      // Obtener el conteo total
      const { count, error: countError } = await supabase
        .from('visits')
        .select('*', { count: 'exact', head: true });

      if (countError) throw new Error('Error al obtener conteo');

      const newCount = count || 0;
      setVisitCount(newCount);
      setCachedCount(newCount);
      setLastUpdate(Date.now());
    } catch (err) {
      console.error('Error en el contador de visitas:', err);
      
      // Intentar nuevamente si no hemos alcanzado el máximo de reintentos
      if (retryCount < MAX_RETRIES) {
        setTimeout(() => updateVisitCount(retryCount + 1), RETRY_DELAY);
        return;
      }
      
      setError('No se pudo actualizar el contador de visitas');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(updateVisitCount, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('es-DO');
  };

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 to-red-50 
                      px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-gray-200 
                      shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span className="text-sm sm:text-base font-semibold text-gray-700">
            Visitas:
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          {isLoading ? (
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          ) : error ? (
            <div className="flex items-center gap-1 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Error</span>
            </div>
          ) : (
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 
                           bg-clip-text text-transparent">
              {formatNumber(visitCount)}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <Users className="w-3 h-3" />
        <span>Visitantes únicos del portal oficial</span>
      </div>
    </div>
  );
};

export default VisitCounter;
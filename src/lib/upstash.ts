import { Redis } from '@upstash/redis'

// Crear una nueva instancia de Redis usando las variables de entorno
export const redis = new Redis({
  url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL || '',
  token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN || '',
}) 
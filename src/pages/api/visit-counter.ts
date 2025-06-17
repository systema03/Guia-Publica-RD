import { NextApiRequest, NextApiResponse } from 'express'
import { redis } from '@/lib/upstash'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Obtener la IP del visitante
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    if (!ip) {
      return res.status(400).json({ message: 'No IP address found' })
    }

    // Verificar si esta IP ya ha visitado el sitio
    const hasVisited = await redis.get(`visitor:${ip}`)
    
    if (!hasVisited) {
      // Incrementar el contador global
      const newCount = await redis.incr('total-visits')
      
      // Marcar esta IP como visitante
      await redis.set(`visitor:${ip}`, true, { ex: 86400 }) // Expira en 24 horas
      
      return res.status(200).json({ count: newCount, isNewVisit: true })
    }

    // Si ya ha visitado, solo devolver el contador actual
    const currentCount = await redis.get('total-visits') || 0
    return res.status(200).json({ count: currentCount, isNewVisit: false })
  } catch (error) {
    console.error('Error in visit counter:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
} 

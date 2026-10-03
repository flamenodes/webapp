import { Redis } from 'ioredis'

let redisClient: Redis | null = null

export function getRedis(): Redis | null {
  if (redisClient) return redisClient

  // No hardcoded fallback: BullMQ must never silently attach to an unknown
  // Redis instance. Without REDIS_URL, queues and workers stay disabled and
  // callers fall back to inline processing.
  const redisUrl = process.env.REDIS_URL
  if (!redisUrl) {
    console.warn('⚠️  REDIS_URL is not set — BullMQ queues and workers are disabled')
    return null
  }

  try {
    redisClient = new Redis(redisUrl, {
      maxRetriesPerRequest: null,
      retryStrategy: (times) => {
        if (times > 3) {
          console.error('❌ Redis connection failed after 3 retries')
          return null
        }
        return Math.min(times * 100, 2000)
      },
    })

    redisClient.on('connect', () => {
      console.log('✅ Redis connected successfully')
    })

    redisClient.on('error', (err) => {
      console.error('❌ Redis connection error:', err.message)
    })

    return redisClient
  } catch (error) {
    console.error('❌ Failed to initialize Redis:', error)
    return null
  }
}

// Initialize connection on module load
export const connection = getRedis()

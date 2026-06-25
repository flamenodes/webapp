import { Redis } from 'ioredis'

let redisClient: Redis | null = null

export function getRedis(): Redis | null {
  if (redisClient) return redisClient

  try {
    const redisUrl = process.env.REDIS_URL || 'redis://default:JmGAGBqlW21zcqvwfAha@13.203.230.206:3453'
    redisClient = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
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

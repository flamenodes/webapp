import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().nonempty(),
  REDIS_URL: z.string().url().default('redis://127.0.0.1:6379'),
  PTERO_URL: z.string().url(),
  PTERO_SECRET: z.string().nonempty(),
  PTERO_DEFAULT_USER_ID: z.coerce.number().positive().default(1),
  PTERO_DEFAULT_NEST: z.coerce.number().positive().default(1),
  PTERO_DEFAULT_EGG: z.coerce.number().positive().default(1),
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  RAZORPAY_CURRENCY: z.string().default('INR'),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  const issues = parsed.error.format()
  throw new Error(`Environment validation failed: ${JSON.stringify(issues, null, 2)}`)
}

export const config = {
  databaseUrl: parsed.data.DATABASE_URL,
  redisUrl: parsed.data.REDIS_URL,
  pterodactylUrl: parsed.data.PTERO_URL,
  pterodactylSecret: parsed.data.PTERO_SECRET,
  pterodactylDefaultUserId: parsed.data.PTERO_DEFAULT_USER_ID,
  pterodactylDefaultNest: parsed.data.PTERO_DEFAULT_NEST,
  pterodactylDefaultEgg: parsed.data.PTERO_DEFAULT_EGG,
  razorpayKeyId: parsed.data.RAZORPAY_KEY_ID,
  razorpayKeySecret: parsed.data.RAZORPAY_KEY_SECRET,
  razorpayCurrency: parsed.data.RAZORPAY_CURRENCY,
}

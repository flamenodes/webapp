import { getRedis } from './connection'
import { Queue } from 'bullmq'

let emailQueue: any = null
let deploymentQueue: any = null
let expirationQueue: any = null

function initQueues() {
  if (emailQueue && deploymentQueue && expirationQueue) return
  
  const redis = getRedis()
  if (!redis) {
    console.warn('⚠️  Redis not available, queues will not be initialized')
    return
  }

  try {
    emailQueue = new Queue('email-notifications', {
      connection: redis,
      defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 2000 },
        removeOnComplete: { count: 100, age: 24 * 3600 },
        removeOnFail: { count: 200, age: 7 * 24 * 3600 },
      },
    })

    deploymentQueue = new Queue('server-deployment', {
      connection: redis,
      defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 10000 },
        removeOnComplete: { count: 50, age: 7 * 24 * 3600 },
        removeOnFail: { count: 100, age: 30 * 24 * 3600 },
      },
    })

    expirationQueue = new Queue('server-expiration', {
      connection: redis,
      defaultJobOptions: {
        attempts: 1,
        removeOnComplete: { count: 10, age: 24 * 3600 },
        removeOnFail: { count: 50, age: 7 * 24 * 3600 },
      },
    })
    
    console.log('✅ BullMQ queues initialized successfully')
  } catch (error) {
    console.error('❌ Failed to initialize queues:', error)
    emailQueue = null
    deploymentQueue = null
    expirationQueue = null
  }
}

// Initialize queues on module load
initQueues()

export { emailQueue, deploymentQueue, expirationQueue, initQueues }

export interface EmailJobData {
  type: 'order-confirmation' | 'server-processing' | 'server-ready' | 'payment-failed'
  to: string
  subject: string
  data: {
    userName?: string
    orderId?: string
    productName?: string
    amount?: string
    serverName?: string
    serverId?: string
    panelUrl?: string
    username?: string
    password?: string
    ip?: string
    port?: string
    [key: string]: any
  }
}

export interface DeploymentJobData {
  orderId: string
  orderItemId: string
  serverId: string
  name: string
  user: number
  nest: number
  egg: number
  extraEnv?: Record<string, string>
  specs: {
    cpu: number
    memory: number
    swap: number
    disk: number
    database: number
    allocation: number
    backups: number
  }
  type: string
  userEmail: string
  userName: string
  // Billing period of the order item — used to set the server expiry from the
  // moment it is actually delivered (not when the order was created).
  billingPeriod?: string
  customDays?: number
  // 'create' provisions a new panel server; 'redeploy' re-applies build limits
  // and reinstalls (falling back to a create when the panel server is gone).
  mode?: 'create' | 'redeploy'
  // Set by admin actions so the UI can distinguish a manual retry/redeploy from
  // an automatic fulfillment.
  source?: 'order' | 'admin' | 'retry'
}

export async function addEmailJob(data: EmailJobData) {
  initQueues()
  if (!emailQueue) {
    console.warn('⚠️  Email queue unavailable - skipping email:', data.type)
    return null
  }
  return await emailQueue.add('send-email', data, {
    priority: data.type === 'payment-failed' ? 1 : 5,
  })
}

export async function addDeploymentJob(data: DeploymentJobData) {
  initQueues()
  if (!deploymentQueue) {
    console.warn('⚠️  Deployment queue unavailable - returning null for fallback')
    return null
  }
  try {
    const job = await deploymentQueue.add('deploy-server', data)
    console.log(
      `✅ Deployment job queued: ${job.id} (${data.mode ?? 'create'} · ${data.name})`,
    )
    return job
  } catch (error) {
    console.error('❌ Failed to add deployment job:', error)
    return null
  }
}

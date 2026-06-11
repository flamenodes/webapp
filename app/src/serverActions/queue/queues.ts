import { getRedis } from './connection'
import { Queue } from 'bullmq'

let emailQueue: any = null
let deploymentQueue: any = null

function initQueues() {
  if (emailQueue && deploymentQueue) return
  
  const redis = getRedis()
  if (!redis) return

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
        attempts: 2,
        backoff: { type: 'fixed', delay: 5000 },
        removeOnComplete: { count: 50, age: 7 * 24 * 3600 },
        removeOnFail: { count: 100, age: 30 * 24 * 3600 },
      },
    })
  } catch {
    emailQueue = null
    deploymentQueue = null
  }
}

export { emailQueue, deploymentQueue, initQueues }

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
    console.warn('⚠️  Deployment queue unavailable - manual deployment required')
    return null
  }
  return await deploymentQueue.add('deploy-server', data)
}

/**
 * BullMQ consumer for the `server-deployment` queue.
 *
 * All provisioning logic lives in `deploy-core.ts`; this file only wires it to
 * the queue, sends lifecycle emails and records failures.
 */
import { Worker } from 'bullmq'
import { getPanelServerUrl } from '../pterodactyl/client'
import { getRedis } from './connection'
import { markServerFailed, performDeployment, performRedeploy } from './deploy-core'
import { addEmailJob, type DeploymentJobData } from './queues'

async function processDeploymentJob(data: DeploymentJobData) {
  const mode = data.mode ?? 'create'
  console.log(`\n🚀 ${mode === 'redeploy' ? 'Redeploying' : 'Deploying'} server: ${data.name}`)

  if (mode !== 'redeploy') {
    await addEmailJob({
      type: 'server-processing',
      to: data.userEmail,
      subject: `Your Server is Being Deployed - ${data.name}`,
      data: {
        userName: data.userName,
        serverName: data.name,
        serverId: data.serverId,
      },
    })
  }

  const result =
    mode === 'redeploy' ? await performRedeploy(data) : await performDeployment(data)

  await addEmailJob({
    type: 'server-ready',
    to: data.userEmail,
    subject: `Your Server is Ready! - ${data.name}`,
    data: {
      userName: data.userName,
      serverName: data.name,
      serverId: data.serverId,
      ip: result.ip ?? undefined,
      port: result.port != null ? String(result.port) : undefined,
      // PTERO_URL is the only source for the panel URL.
      panelUrl: result.panelUrl ?? getPanelServerUrl(result.identifier),
    },
  })

  console.log(`✓ Deployment completed for server: ${data.name}`)
  return result
}

let deploymentWorker: Worker | null = null

const redis = getRedis()
if (redis) {
  try {
    deploymentWorker = new Worker(
      'server-deployment',
      async (job) => {
        const data = job.data as DeploymentJobData

        try {
          return await processDeploymentJob(data)
        } catch (error: any) {
          await markServerFailed(data.serverId, error?.message)
          throw error
        }
      },
      {
        connection: redis,
        concurrency: 3,
      },
    )

    deploymentWorker.on('completed', (job) => {
      console.log(`✓ Deployment job ${job.id} completed: ${job.data?.name}`)
    })

    deploymentWorker.on('failed', (job, err) => {
      console.error(`✗ Deployment job ${job?.id} failed:`, err.message)
    })

    deploymentWorker.on('error', (err) => {
      console.error('✗ Deployment worker error:', err.message)
    })

    console.log('🚀 Deployment worker started')
  } catch (error: any) {
    console.warn('⚠️  Failed to start deployment worker:', error?.message)
  }
} else {
  console.warn('⚠️  Deployment worker disabled - Redis not available')
}

export { deploymentWorker, processDeploymentJob }

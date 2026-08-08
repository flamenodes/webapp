import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { calculateExpiryDate } from '../billing/expiry'

const sendEmailSchema = z.object({
  type: z.enum(['order-confirmation', 'server-processing', 'server-ready', 'payment-failed', 'server-renewed']),
  to: z.string().email(),
  subject: z.string(),
  data: z.record(z.any()),
})

const deployServerSchema = z.object({
  orderId: z.string(),
  orderItemId: z.string(),
  serverId: z.string(),
  name: z.string(),
  user: z.number(),
  nest: z.number(),
  egg: z.number(),
  extraEnv: z.record(z.string()).optional(),
  specs: z.object({
    cpu: z.number(),
    memory: z.number(),
    swap: z.number(),
    disk: z.number(),
    database: z.number(),
    allocation: z.number(),
    backups: z.number(),
  }),
  type: z.string(),
  userEmail: z.string(),
  userName: z.string(),
  billingPeriod: z.string().optional(),
  customDays: z.number().optional(),
})

const emailTemplates = {
  'order-confirmation': (data: any) => ({
    subject: `Order Confirmation - ${data.orderId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">Order Confirmed!</h2>
        <p>Hi ${data.userName},</p>
        <p>Thank you for your order. We've received your payment and your order is being processed.</p>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Order Details</h3>
          <p><strong>Order ID:</strong> ${data.orderId}</p>
          <p><strong>Product:</strong> ${data.productName}</p>
          <p><strong>Amount:</strong> ₹${data.amount}</p>
        </div>
        <p>You'll receive another email once your server is ready.</p>
        <p style="color: #6b7280; font-size: 14px;">Thank you for choosing FlameNodes!</p>
      </div>
    `,
  }),
  'server-processing': (data: any) => ({
    subject: `Your Server is Being Deployed - ${data.serverName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Server Deployment in Progress</h2>
        <p>Hi ${data.userName},</p>
        <p>Great news! Your server <strong>${data.serverName}</strong> is currently being deployed.</p>
        <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;">⏳ <strong>Status:</strong> Processing</p>
          <p style="margin: 10px 0 0 0;">This usually takes 2-5 minutes. You'll receive an email with access details once it's ready.</p>
        </div>
        <p>You can track your server deployment status in your dashboard.</p>
      </div>
    `,
  }),
  'server-ready': (data: any) => ({
    subject: `Your Server is Ready! - ${data.serverName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">🎉 Your Server is Ready!</h2>
        <p>Hi ${data.userName},</p>
        <p>Your server <strong>${data.serverName}</strong> has been successfully deployed and is now active!</p>
        <div style="background-color: #d1fae5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Server Details</h3>
          <p><strong>Server Name:</strong> ${data.serverName}</p>
          <p><strong>IP Address:</strong> ${data.ip || 'Assigned'}</p>
          ${data.port ? `<p><strong>Port:</strong> ${data.port}</p>` : ''}
        </div>
        <p>You can manage your server from the control panel.</p>
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">If you have any questions, our support team is here to help 24/7.</p>
      </div>
    `,
  }),
  'payment-failed': (data: any) => ({
    subject: `Payment Failed - Order ${data.orderId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ef4444;">Payment Failed</h2>
        <p>Hi ${data.userName},</p>
        <p>Unfortunately, we were unable to process your payment for order <strong>${data.orderId}</strong>.</p>
        <div style="background-color: #fee2e2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;">Please check your payment method and try again.</p>
        </div>
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">If you continue to experience issues, please contact our support team.</p>
      </div>
    `,
  }),
  'server-renewed': (data: any) => ({
    subject: `Your Server Has Been Renewed - ${data.serverName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #10b981;">✅ Server Renewed!</h2>
        <p>Hi ${data.userName},</p>
        <p>Your server <strong>${data.serverName}</strong> has been successfully renewed.</p>
        <div style="background-color: #d1fae5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Order ID:</strong> ${data.orderId}</p>
          <p><strong>Amount:</strong> ₹${data.amount}</p>
          <p><strong>New Expiry:</strong> ${new Date(data.newExpiry).toLocaleString()}</p>
        </div>
        <p>Your server is now active again. You can manage it from your dashboard.</p>
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">Thank you for choosing FlameNodes!</p>
      </div>
    `,
  }),
}

export const sendEmailFn = createServerFn({ method: 'POST' })
  .validator((data) => sendEmailSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const template = emailTemplates[data.type]
      if (!template) {
        throw new Error(`Unknown email template: ${data.type}`)
      }

      const emailContent = template(data.data)

      const result = await resend.emails.send({
        from: process.env.EMAIL_FROM || 'FlameNodes <noreply@flamenodes.com>',
        to: data.to,
        subject: data.subject || emailContent.subject,
        html: emailContent.html,
      })

      console.log(`Email sent: ${data.type} to ${data.to}`)
      return { success: true, data: result }
    } catch (error: any) {
      console.error(`Failed to send email: ${data.type}`, error)
      return { success: false, error: error.message }
    }
  })

export const deployServerFn = createServerFn({ method: 'POST' })
  .validator((data) => deployServerSchema.parse(data))
  .handler(async ({ data }) => {
    const { prisma } = await import('#/db')
    const { pteroServerData } = await import('../pterodactyl/configData')
    const { ptero } = await import('../pterodactyl/client')

    let lastError: any = null
    const maxRetries = 5
    const triedAllocations: number[] = []

    try {
      // Send processing email in background
      sendEmailFn({
        data: {
          type: 'server-processing',
          to: data.userEmail,
          subject: `Your Server is Being Deployed - ${data.name}`,
          data: {
            userName: data.userName,
            serverName: data.name,
            serverId: data.serverId,
          },
        },
      }).catch(err => console.error('Email send failed:', err))

      // Retry deployment with different allocations
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          console.log(`\n🔄 Deployment attempt ${attempt}/${maxRetries} for ${data.name}`)

          const serverPayload = await pteroServerData({
            name: data.name,
            user: data.user,
            egg: data.egg,
            nest: data.nest,
            specs: data.specs,
          }, triedAllocations)

          if (data.extraEnv && Object.keys(data.extraEnv).length > 0) {
            serverPayload.environment = { ...serverPayload.environment, ...data.extraEnv }
          }

          console.log('📦 Allocation:', serverPayload.allocation)
          triedAllocations.push(serverPayload.allocation.default)

          const res = await ptero.post('/application/servers', serverPayload)
          const attributes = res.data?.attributes ?? res.data?.data?.attributes

          if (!attributes) {
            throw new Error('No server attributes returned from Pterodactyl')
          }

          const ip = attributes.relationships?.allocations?.data?.[0]?.attributes?.ip ?? null
          const port = attributes.relationships?.allocations?.data?.[0]?.attributes?.port ?? null
          const pterodactylServerId = attributes.id

          await prisma.server.update({
            where: { id: data.serverId },
            data: {
              status: 'ACTIVE',
              pterodactylData: attributes,
              pterodactylServerId,
              ip: ip,
              port: port,
              // Billing cycle starts on delivery, not on order creation.
              expiresAt: calculateExpiryDate(data.billingPeriod ?? 'MONTHLY', data.customDays),
            },
          })

          // Update order status to DELIVERED
          await prisma.order.update({
            where: { id: data.orderId },
            data: { status: 'DELIVERED' },
          })

          // Send ready email in background
          sendEmailFn({
            data: {
              type: 'server-ready',
              to: data.userEmail,
              subject: `Your Server is Ready! - ${data.name}`,
              data: {
                userName: data.userName,
                serverName: data.name,
                serverId: data.serverId,
                ip,
                port,
              },
            },
          }).catch(err => console.error('Email send failed:', err))

          console.log(`✅ Deployment successful for ${data.name} - ${ip}:${port}`)
          return { success: true, data: { ip, port, pterodactylId: attributes.id } }
        } catch (error: any) {
          lastError = error
          const isDaemonError = 
            error.response?.data?.errors?.some((e: any) => e.code === 'DaemonConnectionException') ||
            error.response?.errors?.some((e: any) => e.code === 'DaemonConnectionException')

          console.error(`❌ Attempt ${attempt} failed:`, {
            isDaemonError,
            code: error.response?.data?.errors?.[0]?.code || error.response?.errors?.[0]?.code || 'UNKNOWN',
            message: error.message,
          })

          if (isDaemonError && attempt < maxRetries) {
            const delay = 3000 + (attempt * 1000) // 4s, 5s, 6s, 7s for attempts 1-4
            console.warn(`⚠️ Daemon connection failed on attempt ${attempt}, waiting ${delay}ms before retrying with different allocation...`)
            await new Promise(resolve => setTimeout(resolve, delay))
            continue
          }

          throw error
        }
      }

      throw lastError || new Error('Deployment failed after all retries')
    } catch (error: any) {
      console.error(`❌ Deployment failed for server: ${data.name}`)
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        errors: error.response?.data?.errors,
      })

      await prisma.server.update({
        where: { id: data.serverId },
        data: { status: 'FAILED' },
      })

      return { success: false, error: error.message, details: error.response?.data }
    }
  })

export const redeployServerFn = createServerFn({ method: 'POST' })
  .validator((data) => deployServerSchema.parse(data))
  .handler(async ({ data }) => {
    const { prisma } = await import('#/db')
    const { pteroServerData } = await import('../pterodactyl/configData')
    const { ptero } = await import('../pterodactyl/client')

    try {
      const server = await prisma.server.findUniqueOrThrow({
        where: { id: data.serverId },
      })

      let pterodactylServerId = server.pterodactylServerId

      // Check if the Pterodactyl server still exists
      let serverExists = true
      if (pterodactylServerId) {
        try {
          await ptero.get(`/application/servers/${pterodactylServerId}`)
          console.log(`\n🔄 Redeploying server: ${data.name} (Pterodactyl ID: ${pterodactylServerId})`)
        } catch (checkError: any) {
          if (checkError.response?.status === 404) {
            serverExists = false
            console.warn(`⚠️ Pterodactyl server ${pterodactylServerId} not found, creating new server...`)
          } else {
            throw checkError
          }
        }
      } else {
        serverExists = false
        console.log(`\n🔄 No Pterodactyl ID found, creating new server for: ${data.name}`)
      }

      // If server doesn't exist, create a new one
      if (!serverExists) {
        const triedAllocations: number[] = []
        const serverPayload = await pteroServerData({
          name: data.name,
          user: data.user,
          egg: data.egg,
          nest: data.nest,
          specs: data.specs,
        }, triedAllocations)

        if (data.extraEnv && Object.keys(data.extraEnv).length > 0) {
          serverPayload.environment = { ...serverPayload.environment, ...data.extraEnv }
        }

        console.log('📦 Creating new Pterodactyl server...')
        const res = await ptero.post('/application/servers', serverPayload)
        const attributes = res.data?.attributes ?? res.data?.data?.attributes

        if (!attributes) {
          throw new Error('No server attributes returned from Pterodactyl')
        }

        pterodactylServerId = attributes.id
        const ip = attributes.relationships?.allocations?.data?.[0]?.attributes?.ip ?? null
        const port = attributes.relationships?.allocations?.data?.[0]?.attributes?.port ?? null

        await prisma.server.update({
          where: { id: data.serverId },
          data: {
            pterodactylServerId,
            pterodactylData: attributes,
            ip: ip,
            port: port,
          },
        })

        console.log(`✅ New Pterodactyl server created with ID: ${pterodactylServerId}`)
      } else {
        // Update existing server specs
        const updatePayload = {
          limits: {
            memory: data.specs.memory,
            swap: data.specs.swap,
            disk: data.specs.disk,
            io: 500,
            cpu: data.specs.cpu,
            threads: null,
          },
          feature_limits: {
            databases: data.specs.database,
            allocations: data.specs.allocation,
            backups: data.specs.backups,
          },
        }

        console.log('📋 Updating server specs...')
        await ptero.post(`/application/servers/${pterodactylServerId}/build`, updatePayload)

        console.log('🔧 Triggering server reinstall...')
        await ptero.post(`/application/servers/${pterodactylServerId}/reinstall`)
      }

      // Update database status
      await prisma.server.update({
        where: { id: data.serverId },
        data: { status: 'ACTIVE' },
      })

      console.log(`✅ Redeployment successful for ${data.name}`)
      return { success: true, message: 'Server redeployed successfully' }
    } catch (error: any) {
      console.error(`❌ Redeployment failed for server: ${data.name}`)
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      })

      await prisma.server.update({
        where: { id: data.serverId },
        data: { status: 'FAILED' },
      })

      return { success: false, error: error.message, details: error.response?.data }
    }
  })

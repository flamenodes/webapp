import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

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

async function notify(payload: {
  type: 'server-processing' | 'server-ready'
  to: string
  subject: string
  data: Record<string, any>
}) {
  const { addEmailJob } = await import('./queues')
  const queued = await addEmailJob(payload as any).catch(() => null)
  if (queued) return
  await sendEmailFn({ data: payload as any }).catch((err) =>
    console.error('Email send failed:', err),
  )
}

export const deployServerFn = createServerFn({ method: 'POST' })
  .validator((data) => deployServerSchema.parse(data))
  .handler(async ({ data }) => {
    const { performDeployment, markServerFailed } = await import('./deploy-core')

    try {
      await notify({
        type: 'server-processing',
        to: data.userEmail,
        subject: `Your Server is Being Deployed - ${data.name}`,
        data: {
          userName: data.userName,
          serverName: data.name,
          serverId: data.serverId,
        },
      })

      const result = await performDeployment(data)

      await notify({
        type: 'server-ready',
        to: data.userEmail,
        subject: `Your Server is Ready! - ${data.name}`,
        data: {
          userName: data.userName,
          serverName: data.name,
          serverId: data.serverId,
          ip: result.ip ?? undefined,
          port: result.port != null ? String(result.port) : undefined,
          panelUrl: result.panelUrl,
        },
      })

      return {
        success: true as const,
        data: { ip: result.ip, port: result.port, pterodactylId: result.pterodactylId },
      }
    } catch (error: any) {
      await markServerFailed(data.serverId, error?.message)
      return { success: false as const, error: error.message, details: error.response?.data }
    }
  })

export const redeployServerFn = createServerFn({ method: 'POST' })
  .validator((data) => deployServerSchema.parse(data))
  .handler(async ({ data }) => {
    const { performRedeploy, markServerFailed } = await import('./deploy-core')

    try {
      const result = await performRedeploy(data)

      await notify({
        type: 'server-ready',
        to: data.userEmail,
        subject: `Your Server is Ready! - ${data.name}`,
        data: {
          userName: data.userName,
          serverName: data.name,
          serverId: data.serverId,
          ip: result.ip ?? undefined,
          port: result.port != null ? String(result.port) : undefined,
          panelUrl: result.panelUrl,
        },
      })

      return { success: true as const, message: 'Server redeployed successfully' }
    } catch (error: any) {
      await markServerFailed(data.serverId, error?.message)
      return { success: false as const, error: error.message, details: error.response?.data }
    }
  })

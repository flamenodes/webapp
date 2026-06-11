import { getRedis } from './connection'
import type { EmailJobData } from './queues'
import { Resend } from 'resend'
import { Worker } from 'bullmq'

const resend = new Resend(process.env.RESEND_API_KEY)

const emailTemplates = {
  'order-confirmation': (data: EmailJobData['data']) => ({
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
  'server-processing': (data: EmailJobData['data']) => ({
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
        <a href="${process.env.APP_URL}/user/servers" style="display: inline-block; background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 10px;">View Dashboard</a>
      </div>
    `,
  }),
  'server-ready': (data: EmailJobData['data']) => ({
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
          ${data.username ? `<p><strong>Username:</strong> ${data.username}</p>` : ''}
          ${data.password ? `<p><strong>Password:</strong> ${data.password}</p>` : ''}
        </div>
        <p>You can manage your server from the control panel:</p>
        <a href="${data.panelUrl || process.env.APP_URL + '/user/servers'}" style="display: inline-block; background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 10px;">Access Control Panel</a>
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">If you have any questions, our support team is here to help 24/7.</p>
      </div>
    `,
  }),
  'payment-failed': (data: EmailJobData['data']) => ({
    subject: `Payment Failed - Order ${data.orderId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ef4444;">Payment Failed</h2>
        <p>Hi ${data.userName},</p>
        <p>Unfortunately, we were unable to process your payment for order <strong>${data.orderId}</strong>.</p>
        <div style="background-color: #fee2e2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;">Please check your payment method and try again.</p>
        </div>
        <a href="${process.env.APP_URL}/billing/cart" style="display: inline-block; background-color: #ef4444; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 10px;">Retry Payment</a>
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">If you continue to experience issues, please contact our support team.</p>
      </div>
    `,
  }),
}

let emailWorker: any = null

const redis = getRedis()
if (redis) {
  try {
    emailWorker = new Worker(
    'email-notifications',
    async (job) => {
      const data = job.data as EmailJobData

      try {
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

        console.log(`Email sent successfully: ${data.type} to ${data.to}`, result)
        return result
      } catch (error) {
        console.error(`Failed to send email: ${data.type}`, error)
        throw error
      }
    },
    {
      connection: redis,
      concurrency: 5,
    }
  )

  emailWorker.on('completed', (job) => {
    console.log(`✓ Email job ${job.id} completed: ${job.data.type}`)
  })

  emailWorker.on('failed', (job, err) => {
    console.error(`✗ Email job ${job?.id} failed:`, err.message)
  })

  console.log('📧 Email worker started')
  } catch {
    console.warn('⚠️  Failed to start email worker')
  }
} else {
  console.warn('⚠️  Email worker disabled - Redis not available')
}

export { emailWorker }

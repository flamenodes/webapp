import { createNotification } from '@/serverActions/notifications.api'

export async function notifyServerDeployed(userId: string, serverName: string, serverId: string) {
  await createNotification(
    userId,
    '🎉 Server Deployed',
    `Your server "${serverName}" has been successfully deployed and is now active.`,
    'success',
    `/user/servers/${serverId}`,
    { serverId, event: 'deployed' }
  )
}

export async function notifyServerSuspended(userId: string, serverName: string, serverId: string) {
  await createNotification(
    userId,
    '⚠️ Server Suspended',
    `Your server "${serverName}" has been suspended.`,
    'warning',
    `/user/servers/${serverId}`,
    { serverId, event: 'suspended' }
  )
}

export async function notifyServerExpiring(userId: string, serverName: string, serverId: string, daysLeft: number) {
  await createNotification(
    userId,
    '⏰ Server Expiring Soon',
    `Your server "${serverName}" will expire in ${daysLeft} day${daysLeft !== 1 ? 's' : ''}. Please renew to avoid service interruption.`,
    'warning',
    `/user/servers/${serverId}`,
    { serverId, event: 'expiring', daysLeft }
  )
}

export async function notifyOrderCompleted(userId: string, orderId: string, totalAmount: number) {
  await createNotification(
    userId,
    '✅ Order Completed',
    `Your order has been completed successfully. Total: ₹${totalAmount}`,
    'success',
    `/user/orders/${orderId}`,
    { orderId, event: 'completed', totalAmount }
  )
}

export async function notifyPaymentReceived(userId: string, orderId: string, amount: number) {
  await createNotification(
    userId,
    '💰 Payment Received',
    `We've received your payment of ₹${amount}. Your order is being processed.`,
    'success',
    `/user/orders/${orderId}`,
    { orderId, event: 'payment', amount }
  )
}

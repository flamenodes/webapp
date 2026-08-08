import { prisma } from '#/db'
import { ptero } from '../pterodactyl/client'

/**
 * Suspend every server tied to an order when the order is cancelled:
 *  - tells Pterodactyl to suspend the backing server (freezes/stopped),
 *  - flags the server SUSPENDED in our DB,
 *  - backdates expiresAt so the admin/user UI shows it as Expired.
 *
 * Safe to call on any order — orders without servers are a no-op.
 */
export async function suspendServersForOrder(orderId: string) {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { items: { include: { server: true } } },
  })

  if (!order) return { suspended: 0 }

  let suspended = 0
  for (const item of order.items) {
    const server = item.server
    if (!server) continue

    const pteroData = (server.pterodactylData ?? {}) as any
    const pteroServerId: number | undefined =
      server.pterodactylServerId ?? pteroData?.id ?? undefined

    if (pteroServerId) {
      try {
        await ptero.post(`/application/servers/${pteroServerId}/suspend`)
        console.log(`[cancel] Suspended Pterodactyl server ${pteroServerId} for order ${orderId}`)
      } catch (error: any) {
        console.error(
          `[cancel] Failed to suspend Pterodactyl server ${pteroServerId}:`,
          error?.message,
        )
      }
    }

    await prisma.server.update({
      where: { id: server.id },
      data: {
        status: 'SUSPENDED',
        suspended: true,
        // Backdate the cycle so the server reads as Expired everywhere.
        expiresAt: new Date(Date.now() - 1000),
      },
    })
    suspended++
  }

  return { suspended }
}
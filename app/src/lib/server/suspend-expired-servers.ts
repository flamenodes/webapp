import { prisma } from '#/db'
import { ptero } from '@/serverActions/pterodactyl/client'

/**
 * Suspends servers that have expired billing cycles
 * This should be run periodically (e.g., via cron job or scheduled task)
 */
export async function suspendExpiredServers() {
  try {
    // Find all servers that have expired and are not already suspended or terminated
    const expiredServers = await prisma.server.findMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
        status: {
          notIn: ['SUSPENDED', 'TERMINATED'],
        },
      },
      include: {
        orderItem: {
          include: {
            product: true,
          },
        },
      },
    })

    console.log(`Found ${expiredServers.length} expired servers to suspend`)

    const results = {
      suspended: 0,
      failed: 0,
      errors: [] as string[],
    }

    for (const server of expiredServers) {
      try {
        const deployMode = server.orderItem?.product?.deployMode || 'CUSTOM'
        const pteroData = server.pterodactylData as any

        // If it's a Pterodactyl server, suspend it on the panel using the admin API
        if (deployMode === 'PTERODACTYL' && pteroData?.id) {
          try {
            await ptero.post(`/application/servers/${pteroData.id}/suspend`)
            console.log(`Suspended Pterodactyl server: ${pteroData.id}`)
          } catch (pteroError: any) {
            console.error(
              `Failed to suspend Pterodactyl server ${pteroData.id}:`,
              pteroError.message,
            )
          }
        }

        // Update server status in database
        await prisma.server.update({
          where: { id: server.id },
          data: {
            status: 'SUSPENDED',
            suspended: true,
          },
        })

        console.log(`Suspended server: ${server.id} (${server.name})`)
        results.suspended++
      } catch (error: any) {
        console.error(`Failed to suspend server ${server.id}:`, error.message)
        results.failed++
        results.errors.push(`${server.id}: ${error.message}`)
      }
    }

    return {
      success: true,
      message: `Suspended ${results.suspended} servers, ${results.failed} failed`,
      ...results,
    }
  } catch (error: any) {
    console.error('Error in suspendExpiredServers:', error)
    return {
      success: false,
      message: error.message,
      suspended: 0,
      failed: 0,
      errors: [error.message],
    }
  }
}

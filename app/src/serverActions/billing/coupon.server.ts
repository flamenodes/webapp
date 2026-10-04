import { prisma } from '#/db'

/**
 * Record a redemption. Called from the order writers once a coupon has been
 * priced into an order, so `maxUses` counts orders actually placed rather than
 * every time someone typed the code into the box.
 *
 * This lives beside — not inside — `coupon.api.ts` on purpose. A plain
 * (non-`createServerFn`) export in a server-function module survives the
 * server-function split, so importing that module from a route pulls its
 * `prisma` import into the client bundle and the browser blows up inside
 * Prisma's `fileURLToPath(import.meta.url)`.
 */
export async function consumeCoupon(code: string) {
  await prisma.coupon.updateMany({
    where: { code: code.trim().toUpperCase() },
    data: { usedCount: { increment: 1 } },
  })
}

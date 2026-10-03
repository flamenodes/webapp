/**
 * Resolve the Pterodactyl numeric server id for a database server row.
 *
 * `pterodactylServerId` is authoritative, but rows written before that column
 * existed (and rows written by the deployment worker, which previously omitted
 * it) only carry the id inside the stored `pterodactylData` payload.
 */
export function getPteroServerId(server: {
  pterodactylServerId?: number | null
  pterodactylData?: unknown
}): number | null {
  if (typeof server.pterodactylServerId === 'number' && server.pterodactylServerId > 0) {
    return server.pterodactylServerId
  }

  const data = server.pterodactylData as any
  const id = data?.id ?? data?.attributes?.id
  return typeof id === 'number' && id > 0 ? id : null
}

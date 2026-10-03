/**
 * Client-safe helpers for deriving a server's connection address and panel link.
 *
 * Pterodactyl allocation records carry `ip`, `ip_alias` and `port`. The
 * `ip_alias` is the public hostname the customer should actually connect to
 * (when one is configured), so we prefer it over the raw IP and fall back to
 * the `Server.ip` column for custom servers.
 */

type ServerLike = {
  ip?: string | null
  port?: number | null
  pterodactylData?: unknown
}

type AllocationAttributes = {
  ip?: string | null
  ip_alias?: string | null
  port?: number | null
  is_default?: boolean | null
}

type StoredPteroData = {
  identifier?: string
  relationships?: {
    allocations?: {
      data?: Array<{
        attributes?: AllocationAttributes
      }>
    }
  }
}

function readStoredPteroData(server: ServerLike): StoredPteroData | null {
  return (server.pterodactylData as StoredPteroData | null | undefined) ?? null
}

function readAllocation(
  server: ServerLike,
): AllocationAttributes | null {
  return (
    readStoredPteroData(server)?.relationships?.allocations?.data?.[0]
      ?.attributes ?? null
  )
}

/**
 * Panel base URL. `PTERO_URL` is the single source of truth and is only
 * readable server-side; `VITE_PTERO_URL` and the hardcoded fallback below
 * exist solely so this helper still returns a usable link when called from
 * the browser, where `process.env` is empty.
 */
function getPanelBaseUrl(): string {
  const fromProcess =
    typeof process !== 'undefined' ? process.env?.PTERO_URL : undefined
  const fromVite = (import.meta as any)?.env?.VITE_PTERO_URL as
    | string
    | undefined
  return fromProcess || fromVite || 'https://gpanel.flamenodes.cloud'
}

/**
 * Connection address as `host:port`, preferring the allocation's `ip_alias`
 * over its IP, then over the stored `Server.ip` column. Returns `null` when
 * there is no known host.
 */
export function getServerConnectionString(
  server: ServerLike,
): string | null {
  const allocation = readAllocation(server)
  const host = allocation?.ip_alias || allocation?.ip || server.ip || null
  if (!host) return null
  const port = allocation?.port ?? server.port ?? null
  return port ? `${host}:${port}` : host
}

/**
 * Deep link into the Pterodactyl panel for this server, or `null` when no
 * server identifier is stored.
 */
export function getServerPanelUrl(server: ServerLike): string | null {
  const identifier = readStoredPteroData(server)?.identifier
  if (!identifier) return null
  return `${getPanelBaseUrl()}/server/${identifier}`
}
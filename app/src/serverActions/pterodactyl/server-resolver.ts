import { ptero } from './client'

interface PteroServerAttrs {
  id?: number
  uuid?: string
  identifier?: string
}

/**
 * Convert the identifier the admin pastes into the numeric Pterodactyl server id
 * (the value the Application API expects in /application/servers/{id}).
 *
 * Accepts three forms:
 *  - Numeric id            → "42"            → 42
 *  - Full uuid             → "2ca5cc0b-5033-49dd-a15f-fb6fe598fe9d"
 *  - Short identifier      → "2ca5cc0b"      (the panel URL slug / Server.list "id")
 *
 * Throws a descriptive error if the identifier can't be resolved.
 */
export async function resolvePteroServerId(input: string | number): Promise<number> {
  const raw = String(input).trim()
  if (!raw) throw new Error('Pterodactyl server id is empty')

  // Already the numeric internal id — use as-is.
  if (/^\d+$/.test(raw)) {
    return Number(raw)
  }

  // Full uuid (contains dashes) → look up by uuid.
  if (raw.includes('-')) {
    const res = await ptero.get('/application/servers', {
      params: { 'filter[uuid]': raw },
    })
    const server = res.data?.data?.[0]?.attributes as PteroServerAttrs | undefined
    if (server?.id != null) {
      console.log(`[ptero] Resolved server uuid ${raw} → id ${server.id}`)
      return Number(server.id)
    }
    throw new Error(`No Pterodactyl server found with uuid "${raw}"`)
  }

  // Short identifier (e.g. "2ca5cc0b") → look up by uuidShort.
  const res = await ptero.get('/application/servers', {
    params: { 'filter[uuidShort]': raw },
  })
  const server = res.data?.data?.[0]?.attributes as PteroServerAttrs | undefined
  if (server?.id != null) {
    console.log(`[ptero] Resolved server identifier ${raw} → id ${server.id}`)
    return Number(server.id)
  }
  throw new Error(`No Pterodactyl server found with identifier "${raw}"`)
}

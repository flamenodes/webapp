import axios, { type AxiosInstance } from 'axios'

/**
 * Panel base URL. `PTERO_URL` is the single source of truth for the Pterodactyl
 * URL — there is deliberately no `PTERODACTYL_URL` fallback.
 */
export function getPteroUrl(): string | undefined {
  const url = process.env.PTERO_URL
  return url ? url.replace(/\/+$/, '') : undefined
}

export function isPteroConfigured(): boolean {
  return Boolean(getPteroUrl() && process.env.PTERO_SECRET)
}

/** Deep link to a server in the panel, or to the panel root. */
export function getPanelServerUrl(identifier?: string | null): string | undefined {
  const base = getPteroUrl()
  if (!base) return undefined
  return identifier ? `${base}/server/${identifier}` : base
}

function createClient(token: string | undefined): AxiosInstance {
  return axios.create({
    baseURL: `${getPteroUrl() ?? ''}/api`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token ?? ''}`,
    },
  })
}

/**
 * Application API client (`PTERO_SECRET`, `ptla_…`) — `/api/application/*`.
 * Can create/suspend/delete servers and read server details, nodes and
 * allocations.
 */
export const ptero = createClient(process.env.PTERO_SECRET)

/**
 * Client API client (`PTERO_CLIENT_SECRET`, `ptlc_…`) — `/api/client/*`.
 *
 * Optional. An application key cannot call client endpoints, and the client API
 * is the only place live resource usage (CPU/RAM/disk/network) is exposed. When
 * this is unset the admin UI omits live usage and still shows the panel data
 * that the application API provides.
 */
export const pteroClient: AxiosInstance | null = process.env.PTERO_CLIENT_SECRET
  ? createClient(process.env.PTERO_CLIENT_SECRET)
  : null

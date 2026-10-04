/**
 * Canonical Pterodactyl resource handling, shared by the admin product form
 * (client) and the deployment code (server).
 *
 * `Product.specs` is written by the admin product form as an ARRAY of
 * `{ key, value }` rows, but older rows may be a plain object, or an object
 * with a nested `ptero` block. Nothing here touches the database or the panel,
 * so it is safe to import from either side — that is the point: the form and
 * the deployer must agree on what a spec key means.
 */

export type SpecKey =
  | 'cpu'
  | 'memory'
  | 'disk'
  | 'swap'
  | 'database'
  | 'allocation'
  | 'backups'
  | 'egg'
  | 'nest'

/**
 * Aliases for the keys admins type by hand. Keys are matched
 * case-insensitively and without spaces/dashes, so "vCPU", "cpu_cores" and
 * "CPU" all land on `cpu`.
 */
export const SPEC_ALIASES: Record<string, SpecKey> = {
  cpu: 'cpu',
  vcpu: 'cpu',
  core: 'cpu',
  cores: 'cpu',
  cpucores: 'cpu',
  cpulimit: 'cpu',
  memory: 'memory',
  mem: 'memory',
  ram: 'memory',
  memorymb: 'memory',
  disk: 'disk',
  diskspace: 'disk',
  storage: 'disk',
  ssd: 'disk',
  hdd: 'disk',
  swap: 'swap',
  database: 'database',
  databases: 'database',
  db: 'database',
  databaseslots: 'database',
  databasecount: 'database',
  allocation: 'allocation',
  allocations: 'allocation',
  port: 'allocation',
  ports: 'allocation',
  allocationcount: 'allocation',
  backups: 'backups',
  backupslots: 'backups',
  backupcount: 'backups',
  egg: 'egg',
  nest: 'nest',
}

export function normalizeSpecKey(key: string) {
  return key.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function parseLeadingNumber(raw: unknown): number | null {
  if (typeof raw === 'number') {
    return Number.isFinite(raw) ? raw : null
  }
  if (typeof raw !== 'string') return null

  const match = raw.replace(/,/g, '').match(/-?\d+(?:\.\d+)?/)
  if (!match) return null

  const value = Number(match[0])
  return Number.isFinite(value) ? value : null
}

/** Memory-like values accept units: "4 GB" → 4096. Unitless values are MB. */
function parseMegabytes(raw: unknown, base: number) {
  const text = typeof raw === 'string' ? raw.toLowerCase() : ''
  if (/\d\s*tb\b|terabyte/.test(text)) return Math.round(base * 1024 * 1024)
  if (/\d\s*gb\b|gigabyte/.test(text)) return Math.round(base * 1024)
  if (/\d\s*g\b/.test(text)) return Math.round(base * 1024)
  return Math.round(base)
}

export function parseSpecValue(raw: unknown, key: SpecKey): number | null {
  const base = parseLeadingNumber(raw)
  if (base === null) return null

  if (key === 'egg' || key === 'nest') return Math.trunc(base)

  if (key === 'cpu' || key === 'database' || key === 'allocation' || key === 'backups') {
    return Math.trunc(base)
  }

  return parseMegabytes(raw, base)
}

/**
 * Flatten a product's `specs` JSON into canonical Pterodactyl keys.
 *
 * Reading only object properties is what silently produced zeroed specs
 * before, so all three historical shapes are accepted here.
 */
export function normalizeSpecSource(specs: unknown): Partial<Record<SpecKey, unknown>> {
  const out: Partial<Record<SpecKey, unknown>> = {}

  const addEntry = (key: unknown, value: unknown) => {
    if (typeof key !== 'string' || !key.trim()) return
    if (value === null || value === undefined || value === '') return

    const mapped = SPEC_ALIASES[normalizeSpecKey(key)]
    if (!mapped) return

    out[mapped] = value
  }

  if (Array.isArray(specs)) {
    for (const entry of specs) {
      if (!entry || typeof entry !== 'object') continue
      const row = entry as Record<string, unknown>
      addEntry(row.key, row.value)
    }
    return out
  }

  if (specs && typeof specs === 'object') {
    const obj = specs as Record<string, unknown>

    for (const [key, value] of Object.entries(obj)) {
      if (key === 'ptero' || (value !== null && typeof value === 'object')) continue
      addEntry(key, value)
    }

    // Legacy shape: specs.ptero takes precedence over root-level keys.
    const nested = obj.ptero
    if (nested && typeof nested === 'object' && !Array.isArray(nested)) {
      for (const [key, value] of Object.entries(nested as Record<string, unknown>)) {
        addEntry(key, value)
      }
    }
  }

  return out
}

/**
 * The resource rows the admin product form writes as canonical specs entries.
 * `key` is the spelling stored in `Product.specs`; every one of them is
 * understood by `normalizeSpecSource`.
 */
export const PTERO_RESOURCE_FIELDS = [
  { key: 'cpu', label: 'CPU (%)', hint: '100 = one core' },
  { key: 'memory', label: 'RAM (MB)', hint: '1024 = 1 GB' },
  { key: 'disk', label: 'Disk (MB)', hint: '1024 = 1 GB' },
  { key: 'swap', label: 'Swap (MB)', hint: '0 to disable' },
  { key: 'databases', label: 'Databases', hint: 'Max database slots' },
  { key: 'allocations', label: 'Allocations', hint: 'Extra ports' },
  { key: 'backups', label: 'Backups', hint: 'Max backup slots' },
] as const

export type PteroResourceKey = (typeof PTERO_RESOURCE_FIELDS)[number]['key']

/** Keys that must be present for a Pterodactyl deployment to be sized correctly. */
export const REQUIRED_PTERO_RESOURCES: PteroResourceKey[] = ['cpu', 'memory', 'disk']

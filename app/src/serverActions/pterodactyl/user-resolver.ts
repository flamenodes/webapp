import { ptero } from './client'

export interface PteroUser {
  id: number
  uuid: string
  email: string
  username: string
}

/** Look up a Pterodactyl user by email via the Application API. Returns null when not found. */
export async function getPteroUserByEmail(email: string): Promise<PteroUser | null> {
  if (!email) return null
  try {
    const res = await ptero.get('/application/users', {
      params: { 'filter[email]': email },
    })
    const items = (res.data?.data ?? []) as Array<{ attributes?: PteroUser }>
    const match = items.find(
      (u) => (u?.attributes?.email ?? '').toLowerCase() === email.toLowerCase(),
    )
    return match?.attributes ?? null
  } catch (err: any) {
    console.error(`[ptero] Email lookup failed for "${email}":`, err?.message)
    return null
  }
}

/**
 * Resolve the numeric Pterodactyl owner id for a deployment.
 * Looks up the customer's own account by email and uses its numeric id.
 * Falls back to the configured default user id when no match is found.
 */
export async function resolveDeployOwnerId(opts: {
  customerEmail?: string | null
  defaultUserId?: number
}): Promise<number> {
  const email = opts.customerEmail?.trim()
  if (email) {
    const user = await getPteroUserByEmail(email)
    if (user?.id != null) {
      console.log(`[ptero] Assigned server owner to customer ${email} (user id ${user.id})`)
      return user.id
    }
    console.warn(
      `[ptero] No Pterodactyl user found for email "${email}" — falling back to default user id ${opts.defaultUserId ?? 1}`,
    )
  }
  return opts.defaultUserId ?? Number(process.env.PTERO_DEFAULT_USER_ID ?? 1)
}
import { auth } from '@/lib/auth'
import type { Permissions } from '@/lib/permissions'

export async function hasPermission(
  userId: string,
  permissions: Permissions
): Promise<boolean> {
  try {
    const res = await auth.api.userHasPermission({
      body: {
        userId,
        permissions: permissions,
      },
    })

    return res.success === true
  } catch {
    return false
  }
}

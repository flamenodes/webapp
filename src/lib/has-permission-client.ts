import { authClient } from '@/lib/auth-client'
import type { Permissions } from '@/lib/permissions'

export async function hasPermissionClient(
  permissions: Permissions
): Promise<boolean> {
  try {
    const res = await authClient.admin.hasPermission({
      permissions: permissions as never,
    })

    return res.data?.success === true
  } catch {
    return false
  }
}

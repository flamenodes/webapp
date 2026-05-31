import { authClient } from '@/lib/auth-client';
export async function hasPermissionClient(permissions) {
    try {
        const res = await authClient.admin.hasPermission({
            permissions: permissions,
        });
        return res.data?.success === true;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=has-permission-client.js.map
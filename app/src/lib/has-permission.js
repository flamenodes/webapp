import { getSession } from '#/handlers/auth.handler';
import { auth } from '@/lib/auth';
import { createServerFn } from '@tanstack/react-start';
import z from 'zod';
async function hasPermission(userId, permissions) {
    try {
        const res = await auth.api.userHasPermission({
            body: {
                userId,
                permissions: permissions,
            },
        });
        return res.success === true;
    }
    catch {
        return false;
    }
}
const hasPermissionSchema = z.object({
    permissions: z.custom(),
});
export const hasPermissionFn = createServerFn({ method: 'POST' })
    .inputValidator(hasPermissionSchema)
    .handler(async ({ data }) => {
    const session = await getSession();
    if (!session?.user.id) {
        throw new Error("Unauthorized");
    }
    const permission = await hasPermission(session.user.id, data.permissions);
    return permission;
});
//# sourceMappingURL=has-permission.js.map
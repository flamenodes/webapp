import * as z from 'zod';
// prettier-ignore
export const ServerModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    orderItemId: z.string(),
    orderItem: z.unknown(),
    name: z.string(),
    type: z.string(),
    status: z.string(),
    ip: z.string().nullable(),
    port: z.number().int().nullable(),
    expiresAt: z.date().nullable(),
    resources: z.unknown().nullable(),
    pterodactylData: z.unknown().nullable(),
    suspended: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();
//# sourceMappingURL=Server.pure.js.map
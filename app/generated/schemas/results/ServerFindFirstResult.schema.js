import * as z from 'zod';
export const ServerFindFirstResultSchema = z.nullable(z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    orderItemId: z.string(),
    orderItem: z.unknown(),
    name: z.string(),
    type: z.string(),
    status: z.string(),
    ip: z.string().optional(),
    port: z.number().int().optional(),
    expiresAt: z.date().optional(),
    resources: z.unknown().optional(),
    pterodactylData: z.unknown().optional(),
    suspended: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}));
//# sourceMappingURL=ServerFindFirstResult.schema.js.map
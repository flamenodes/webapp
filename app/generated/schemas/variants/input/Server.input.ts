import * as z from 'zod';
// prettier-ignore
export const ServerInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    orderItemId: z.string(),
    orderItem: z.unknown(),
    name: z.string(),
    type: z.string(),
    status: z.string(),
    ip: z.string().optional().nullable(),
    port: z.number().int().optional().nullable(),
    pterodactylServerId: z.number().int().optional().nullable(),
    expiresAt: z.coerce.date().optional().nullable(),
    resources: z.unknown().optional().nullable(),
    pterodactylData: z.unknown().optional().nullable(),
    suspended: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type ServerInputType = z.infer<typeof ServerInputSchema>;

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
    expiresAt: z.date().optional().nullable(),
    resources: z.unknown().optional().nullable(),
    pterodactylData: z.unknown().optional().nullable(),
    suspended: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ServerInputType = z.infer<typeof ServerInputSchema>;

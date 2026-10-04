import * as z from 'zod';
// prettier-ignore
export const ServerInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    orderItemId: z.string().optional().nullable(),
    name: z.string(),
    type: z.string(),
    status: z.string(),
    ip: z.string().optional().nullable(),
    port: z.number().int().optional().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional().nullable(),
    resources: z.any().optional().nullable(),
    pterodactylData: z.any().optional().nullable(),
    suspended: z.boolean(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    pterodactylServerId: z.number().int().optional().nullable(),
    orderItem: z.any().optional().nullable(),
    user: z.any(),
    renewals: z.array(z.any())
}).strict();

export type ServerInputType = z.infer<typeof ServerInputSchema>;

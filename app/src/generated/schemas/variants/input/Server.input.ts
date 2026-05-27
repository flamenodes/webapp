import * as z from 'zod';
// prettier-ignore
export const ServerInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    orderItemId: z.string(),
    orderItem: z.any(),
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
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type ServerInputType = z.infer<typeof ServerInputSchema>;

import * as z from 'zod';
// prettier-ignore
export const ServerCreateSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    orderItemId: z.string(),
    orderItem: z.any(),
    name: z.string(),
    type: z.string(),
    status: z.string(),
    ip: z.string().nullable(),
    port: z.number().int().nullable(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    resources: z.any().nullable(),
    pterodactylData: z.any().nullable(),
    suspended: z.boolean(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type ServerCreateType = z.infer<typeof ServerCreateSchema>;

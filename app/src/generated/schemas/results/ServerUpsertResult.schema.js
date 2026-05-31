import * as z from 'zod';
export const ServerUpsertResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    orderItemId: z.string(),
    orderItem: z.any(),
    name: z.string(),
    type: z.string(),
    status: z.string(),
    ip: z.string().optional(),
    port: z.number().int().optional(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional(),
    resources: z.any().optional(),
    pterodactylData: z.any().optional(),
    suspended: z.boolean(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
});
//# sourceMappingURL=ServerUpsertResult.schema.js.map
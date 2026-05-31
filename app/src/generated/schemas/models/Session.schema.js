import * as z from 'zod';
export const SessionSchema = z.object({
    id: z.string(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    token: z.string(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    ipAddress: z.string().nullish(),
    userAgent: z.string().nullish(),
    userId: z.string(),
    impersonatedBy: z.string().nullish(),
});
//# sourceMappingURL=Session.schema.js.map
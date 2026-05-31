import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    userId: z.string(),
    impersonatedBy: z.string().optional().nullable()
}).strict();
export const SessionCreateManyInputObjectSchema = makeSchema();
export const SessionCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionCreateManyInput.schema.js.map
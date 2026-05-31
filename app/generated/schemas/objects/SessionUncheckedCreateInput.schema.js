import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date().optional(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    userId: z.string(),
    impersonatedBy: z.string().optional().nullable()
}).strict();
export const SessionUncheckedCreateInputObjectSchema = makeSchema();
export const SessionUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionUncheckedCreateInput.schema.js.map
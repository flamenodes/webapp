import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    impersonatedBy: z.string().optional().nullable()
}).strict();
export const SessionCreateManyUserInputObjectSchema = makeSchema();
export const SessionCreateManyUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionCreateManyUserInput.schema.js.map
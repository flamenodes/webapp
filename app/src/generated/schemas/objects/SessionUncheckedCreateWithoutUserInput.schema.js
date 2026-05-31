import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"),
    token: z.string(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    impersonatedBy: z.string().optional().nullable()
}).strict();
export const SessionUncheckedCreateWithoutUserInputObjectSchema = makeSchema();
export const SessionUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionUncheckedCreateWithoutUserInput.schema.js.map
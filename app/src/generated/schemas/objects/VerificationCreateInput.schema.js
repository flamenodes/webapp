import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const VerificationCreateInputObjectSchema = makeSchema();
export const VerificationCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationCreateInput.schema.js.map
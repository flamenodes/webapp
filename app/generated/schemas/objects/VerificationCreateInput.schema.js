import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional()
}).strict();
export const VerificationCreateInputObjectSchema = makeSchema();
export const VerificationCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationCreateInput.schema.js.map
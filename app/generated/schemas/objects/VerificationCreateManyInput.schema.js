import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const VerificationCreateManyInputObjectSchema = makeSchema();
export const VerificationCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationCreateManyInput.schema.js.map
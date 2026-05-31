import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    identifier: z.boolean().optional(),
    value: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const VerificationSelectObjectSchema = makeSchema();
export const VerificationSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationSelect.schema.js.map
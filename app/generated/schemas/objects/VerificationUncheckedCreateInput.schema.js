import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional()
}).strict();
export const VerificationUncheckedCreateInputObjectSchema = makeSchema();
export const VerificationUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationUncheckedCreateInput.schema.js.map
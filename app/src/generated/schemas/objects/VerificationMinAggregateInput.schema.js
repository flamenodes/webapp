import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    identifier: z.literal(true).optional(),
    value: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const VerificationMinAggregateInputObjectSchema = makeSchema();
export const VerificationMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationMinAggregateInput.schema.js.map
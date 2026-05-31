import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    identifier: z.literal(true).optional(),
    value: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const VerificationCountAggregateInputObjectSchema = makeSchema();
export const VerificationCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationCountAggregateInput.schema.js.map
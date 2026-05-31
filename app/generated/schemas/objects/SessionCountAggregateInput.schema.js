import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    token: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    ipAddress: z.literal(true).optional(),
    userAgent: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    impersonatedBy: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const SessionCountAggregateInputObjectSchema = makeSchema();
export const SessionCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionCountAggregateInput.schema.js.map
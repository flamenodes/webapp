import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    orderItemId: z.literal(true).optional(),
    name: z.literal(true).optional(),
    type: z.literal(true).optional(),
    status: z.literal(true).optional(),
    ip: z.literal(true).optional(),
    port: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    suspended: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const ServerMinAggregateInputObjectSchema = makeSchema();
export const ServerMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerMinAggregateInput.schema.js.map
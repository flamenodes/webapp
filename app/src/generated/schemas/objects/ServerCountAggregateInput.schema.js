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
    resources: z.literal(true).optional(),
    pterodactylData: z.literal(true).optional(),
    suspended: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const ServerCountAggregateInputObjectSchema = makeSchema();
export const ServerCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerCountAggregateInput.schema.js.map
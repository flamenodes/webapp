import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    type: z.literal(true).optional(),
    title: z.literal(true).optional(),
    message: z.literal(true).optional(),
    read: z.literal(true).optional(),
    createdAt: z.literal(true).optional()
}).strict();
export const NotificationMaxAggregateInputObjectSchema = makeSchema();
export const NotificationMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationMaxAggregateInput.schema.js.map
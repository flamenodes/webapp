import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    label: z.literal(true).optional(),
    description: z.literal(true).optional(),
    type: z.literal(true).optional(),
    required: z.literal(true).optional(),
    category: z.literal(true).optional(),
    sortOrder: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const ConfigurationOptionMinAggregateInputObjectSchema = makeSchema();
export const ConfigurationOptionMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionMinAggregateInput.schema.js.map
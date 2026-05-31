import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    optionId: z.literal(true).optional(),
    label: z.literal(true).optional(),
    value: z.literal(true).optional(),
    description: z.literal(true).optional(),
    priceModifier: z.literal(true).optional(),
    metadata: z.literal(true).optional(),
    sortOrder: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const ConfigurationValueCountAggregateInputObjectSchema = makeSchema();
export const ConfigurationValueCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueCountAggregateInput.schema.js.map
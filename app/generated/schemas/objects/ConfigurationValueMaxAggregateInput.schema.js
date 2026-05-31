import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    optionId: z.literal(true).optional(),
    label: z.literal(true).optional(),
    value: z.literal(true).optional(),
    description: z.literal(true).optional(),
    priceModifier: z.literal(true).optional(),
    sortOrder: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const ConfigurationValueMaxAggregateInputObjectSchema = makeSchema();
export const ConfigurationValueMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueMaxAggregateInput.schema.js.map
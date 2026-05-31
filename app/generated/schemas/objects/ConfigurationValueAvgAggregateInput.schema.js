import * as z from 'zod';
const makeSchema = () => z.object({
    priceModifier: z.literal(true).optional(),
    sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationValueAvgAggregateInputObjectSchema = makeSchema();
export const ConfigurationValueAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueAvgAggregateInput.schema.js.map
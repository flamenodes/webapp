import * as z from 'zod';
const makeSchema = () => z.object({
    priceModifier: z.literal(true).optional(),
    sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationValueSumAggregateInputObjectSchema = makeSchema();
export const ConfigurationValueSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueSumAggregateInput.schema.js.map
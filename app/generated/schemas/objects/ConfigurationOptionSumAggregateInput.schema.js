import * as z from 'zod';
const makeSchema = () => z.object({
    sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationOptionSumAggregateInputObjectSchema = makeSchema();
export const ConfigurationOptionSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionSumAggregateInput.schema.js.map
import * as z from 'zod';
const makeSchema = () => z.object({
    sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationOptionAvgAggregateInputObjectSchema = makeSchema();
export const ConfigurationOptionAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionAvgAggregateInput.schema.js.map
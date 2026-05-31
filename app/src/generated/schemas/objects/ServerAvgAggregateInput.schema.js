import * as z from 'zod';
const makeSchema = () => z.object({
    port: z.literal(true).optional()
}).strict();
export const ServerAvgAggregateInputObjectSchema = makeSchema();
export const ServerAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerAvgAggregateInput.schema.js.map
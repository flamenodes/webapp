import * as z from 'zod';
const makeSchema = () => z.object({
    port: z.literal(true).optional()
}).strict();
export const ServerSumAggregateInputObjectSchema = makeSchema();
export const ServerSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerSumAggregateInput.schema.js.map
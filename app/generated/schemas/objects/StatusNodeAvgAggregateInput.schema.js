import * as z from 'zod';
const makeSchema = () => z.object({
    port: z.literal(true).optional(),
    latency: z.literal(true).optional(),
    cpu: z.literal(true).optional(),
    memory: z.literal(true).optional(),
    disk: z.literal(true).optional()
}).strict();
export const StatusNodeAvgAggregateInputObjectSchema = makeSchema();
export const StatusNodeAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeAvgAggregateInput.schema.js.map
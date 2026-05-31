import * as z from 'zod';
const makeSchema = () => z.object({
    port: z.literal(true).optional(),
    latency: z.literal(true).optional(),
    cpu: z.literal(true).optional(),
    memory: z.literal(true).optional(),
    disk: z.literal(true).optional()
}).strict();
export const StatusNodeSumAggregateInputObjectSchema = makeSchema();
export const StatusNodeSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeSumAggregateInput.schema.js.map
import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    ip: z.literal(true).optional(),
    location: z.literal(true).optional(),
    type: z.literal(true).optional(),
    port: z.literal(true).optional(),
    protocol: z.literal(true).optional(),
    status: z.literal(true).optional(),
    latency: z.literal(true).optional(),
    lastChecked: z.literal(true).optional(),
    cpu: z.literal(true).optional(),
    memory: z.literal(true).optional(),
    disk: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const StatusNodeMaxAggregateInputObjectSchema = makeSchema();
export const StatusNodeMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeMaxAggregateInput.schema.js.map
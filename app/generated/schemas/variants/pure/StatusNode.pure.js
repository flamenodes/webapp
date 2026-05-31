import * as z from 'zod';
// prettier-ignore
export const StatusNodeModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    ip: z.string(),
    location: z.string(),
    type: z.string(),
    port: z.number().int(),
    protocol: z.string(),
    status: z.string(),
    latency: z.number().int().nullable(),
    lastChecked: z.date().nullable(),
    cpu: z.number().nullable(),
    memory: z.number().int().nullable(),
    disk: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();
//# sourceMappingURL=StatusNode.pure.js.map
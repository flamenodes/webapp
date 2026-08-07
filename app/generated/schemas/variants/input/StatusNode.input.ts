import * as z from 'zod';
// prettier-ignore
export const StatusNodeInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    ip: z.string(),
    location: z.string(),
    type: z.string(),
    port: z.number().int(),
    protocol: z.string(),
    status: z.string(),
    latency: z.number().int().optional().nullable(),
    lastChecked: z.coerce.date().optional().nullable(),
    cpu: z.number().optional().nullable(),
    memory: z.number().int().optional().nullable(),
    disk: z.number().int().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type StatusNodeInputType = z.infer<typeof StatusNodeInputSchema>;

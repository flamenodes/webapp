import * as z from 'zod';
// prettier-ignore
export const StatusNodeCreateSchema = z.object({
    id: z.string(),
    name: z.string(),
    ip: z.string(),
    location: z.string(),
    type: z.string(),
    port: z.number().int(),
    protocol: z.string(),
    status: z.string(),
    latency: z.number().int().nullable(),
    lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    cpu: z.number().nullable(),
    disk: z.number().int().nullable(),
    memory: z.number().int().nullable()
}).strict();

export type StatusNodeCreateType = z.infer<typeof StatusNodeCreateSchema>;

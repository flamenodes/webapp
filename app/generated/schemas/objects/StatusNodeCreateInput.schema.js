import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    name: z.string(),
    ip: z.string(),
    location: z.string(),
    type: z.string().optional(),
    port: z.number().int().optional(),
    protocol: z.string().optional(),
    status: z.string().optional(),
    latency: z.number().int().optional().nullable(),
    lastChecked: z.coerce.date().optional().nullable(),
    cpu: z.number().optional().nullable(),
    memory: z.number().int().optional().nullable(),
    disk: z.number().int().optional().nullable(),
    createdAt: z.coerce.date().optional()
}).strict();
export const StatusNodeCreateInputObjectSchema = makeSchema();
export const StatusNodeCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeCreateInput.schema.js.map
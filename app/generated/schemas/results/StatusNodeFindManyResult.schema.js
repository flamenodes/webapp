import * as z from 'zod';
export const StatusNodeFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        name: z.string(),
        ip: z.string(),
        location: z.string(),
        type: z.string(),
        port: z.number().int(),
        protocol: z.string(),
        status: z.string(),
        latency: z.number().int().optional(),
        lastChecked: z.date().optional(),
        cpu: z.number().optional(),
        memory: z.number().int().optional(),
        disk: z.number().int().optional(),
        createdAt: z.date(),
        updatedAt: z.date()
    })),
    pagination: z.object({
        page: z.number().int().min(1),
        pageSize: z.number().int().min(1),
        total: z.number().int().min(0),
        totalPages: z.number().int().min(0),
        hasNext: z.boolean(),
        hasPrev: z.boolean()
    })
});
//# sourceMappingURL=StatusNodeFindManyResult.schema.js.map
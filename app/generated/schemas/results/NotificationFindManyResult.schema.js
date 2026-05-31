import * as z from 'zod';
export const NotificationFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        userId: z.string(),
        user: z.unknown(),
        type: z.string(),
        title: z.string(),
        message: z.string(),
        read: z.boolean(),
        createdAt: z.date()
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
//# sourceMappingURL=NotificationFindManyResult.schema.js.map
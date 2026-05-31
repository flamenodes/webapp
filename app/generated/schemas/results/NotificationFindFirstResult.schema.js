import * as z from 'zod';
export const NotificationFindFirstResultSchema = z.nullable(z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    read: z.boolean(),
    createdAt: z.date()
}));
//# sourceMappingURL=NotificationFindFirstResult.schema.js.map
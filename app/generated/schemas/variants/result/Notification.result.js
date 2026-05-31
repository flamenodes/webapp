import * as z from 'zod';
// prettier-ignore
export const NotificationResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    read: z.boolean(),
    createdAt: z.date()
}).strict();
//# sourceMappingURL=Notification.result.js.map
import * as z from 'zod';
// prettier-ignore
export const NotificationModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    read: z.boolean(),
    createdAt: z.date()
}).strict();

export type NotificationPureType = z.infer<typeof NotificationModelSchema>;

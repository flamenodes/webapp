import * as z from 'zod';
// prettier-ignore
export const NotificationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    read: z.boolean(),
    link: z.string().optional().nullable(),
    metadata: z.unknown().optional().nullable(),
    createdAt: z.coerce.date()
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;

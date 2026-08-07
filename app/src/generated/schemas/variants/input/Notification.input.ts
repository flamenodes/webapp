import * as z from 'zod';
// prettier-ignore
export const NotificationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    read: z.boolean(),
    link: z.string().optional().nullable(),
    metadata: z.any().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;

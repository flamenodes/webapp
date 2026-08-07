import * as z from 'zod';
// prettier-ignore
export const NotificationCreateSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.any(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    read: z.boolean(),
    link: z.string().nullable(),
    metadata: z.any().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type NotificationCreateType = z.infer<typeof NotificationCreateSchema>;

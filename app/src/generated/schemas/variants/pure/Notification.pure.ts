import * as z from 'zod';
// prettier-ignore
export const NotificationModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    type: z.string(),
    title: z.string(),
    message: z.string(),
    read: z.boolean(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    link: z.string().nullable(),
    metadata: z.any().nullable(),
    user: z.any()
}).strict();

export type NotificationPureType = z.infer<typeof NotificationModelSchema>;

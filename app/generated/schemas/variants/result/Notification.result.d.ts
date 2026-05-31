import * as z from 'zod';
export declare const NotificationResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    type: z.ZodString;
    title: z.ZodString;
    message: z.ZodString;
    read: z.ZodBoolean;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type NotificationResultType = z.infer<typeof NotificationResultSchema>;
//# sourceMappingURL=Notification.result.d.ts.map
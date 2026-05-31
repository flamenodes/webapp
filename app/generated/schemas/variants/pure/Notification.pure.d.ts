import * as z from 'zod';
export declare const NotificationModelSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    type: z.ZodString;
    title: z.ZodString;
    message: z.ZodString;
    read: z.ZodBoolean;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type NotificationPureType = z.infer<typeof NotificationModelSchema>;
//# sourceMappingURL=Notification.pure.d.ts.map
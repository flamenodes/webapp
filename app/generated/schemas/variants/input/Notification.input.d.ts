import * as z from 'zod';
export declare const NotificationInputSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    type: z.ZodString;
    title: z.ZodString;
    message: z.ZodString;
    read: z.ZodBoolean;
    createdAt: z.ZodDate;
}, z.core.$strict>;
export type NotificationInputType = z.infer<typeof NotificationInputSchema>;
//# sourceMappingURL=Notification.input.d.ts.map
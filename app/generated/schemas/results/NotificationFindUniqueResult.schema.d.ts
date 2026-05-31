import * as z from 'zod';
export declare const NotificationFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    type: z.ZodString;
    title: z.ZodString;
    message: z.ZodString;
    read: z.ZodBoolean;
    createdAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=NotificationFindUniqueResult.schema.d.ts.map
import * as z from 'zod';
export declare const NotificationFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        userId: z.ZodString;
        user: z.ZodUnknown;
        type: z.ZodString;
        title: z.ZodString;
        message: z.ZodString;
        read: z.ZodBoolean;
        createdAt: z.ZodDate;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=NotificationFindManyResult.schema.d.ts.map
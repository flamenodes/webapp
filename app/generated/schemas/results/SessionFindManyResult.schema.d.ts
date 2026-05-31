import * as z from 'zod';
export declare const SessionFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        expiresAt: z.ZodDate;
        token: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        ipAddress: z.ZodOptional<z.ZodString>;
        userAgent: z.ZodOptional<z.ZodString>;
        userId: z.ZodString;
        user: z.ZodUnknown;
        impersonatedBy: z.ZodOptional<z.ZodString>;
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
//# sourceMappingURL=SessionFindManyResult.schema.d.ts.map
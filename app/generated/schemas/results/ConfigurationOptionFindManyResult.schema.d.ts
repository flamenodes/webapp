import * as z from 'zod';
export declare const ConfigurationOptionFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        type: z.ZodUnknown;
        required: z.ZodBoolean;
        category: z.ZodUnknown;
        sortOrder: z.ZodNumber;
        values: z.ZodArray<z.ZodUnknown>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
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
//# sourceMappingURL=ConfigurationOptionFindManyResult.schema.d.ts.map
import * as z from 'zod';
export declare const ProductCategoryConfigAggregateResultSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        category: z.ZodNumber;
        billingPeriods: z.ZodNumber;
        createdAt: z.ZodNumber;
        updatedAt: z.ZodNumber;
    }, z.core.$strip>>;
    _min: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodDate>;
        updatedAt: z.ZodNullable<z.ZodDate>;
    }, z.core.$strip>>>;
    _max: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodDate>;
        updatedAt: z.ZodNullable<z.ZodDate>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
//# sourceMappingURL=ProductCategoryConfigAggregateResult.schema.d.ts.map
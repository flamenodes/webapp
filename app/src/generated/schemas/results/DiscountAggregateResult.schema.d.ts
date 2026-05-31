import * as z from 'zod';
export declare const DiscountAggregateResultSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        label: z.ZodNumber;
        percentage: z.ZodNumber;
        product: z.ZodNumber;
    }, z.core.$strip>>;
    _sum: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        percentage: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>>;
    _avg: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        percentage: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>>;
    _min: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        label: z.ZodNullable<z.ZodString>;
        percentage: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>>;
    _max: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        label: z.ZodNullable<z.ZodString>;
        percentage: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
//# sourceMappingURL=DiscountAggregateResult.schema.d.ts.map
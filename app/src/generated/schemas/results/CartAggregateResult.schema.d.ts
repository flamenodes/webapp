import * as z from 'zod';
export declare const CartAggregateResultSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        userId: z.ZodNumber;
        user: z.ZodNumber;
        items: z.ZodNumber;
        couponCode: z.ZodNumber;
        createdAt: z.ZodNumber;
        updatedAt: z.ZodNumber;
    }, z.core.$strip>>;
    _min: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        userId: z.ZodNullable<z.ZodString>;
        couponCode: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    _max: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        userId: z.ZodNullable<z.ZodString>;
        couponCode: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
//# sourceMappingURL=CartAggregateResult.schema.d.ts.map
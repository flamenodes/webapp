import * as z from 'zod';
export declare const VerificationAggregateResultSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        identifier: z.ZodNumber;
        value: z.ZodNumber;
        expiresAt: z.ZodNumber;
        createdAt: z.ZodNumber;
        updatedAt: z.ZodNumber;
    }, z.core.$strip>>;
    _min: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        identifier: z.ZodNullable<z.ZodString>;
        value: z.ZodNullable<z.ZodString>;
        expiresAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodNullable<z.ZodDate>;
        updatedAt: z.ZodNullable<z.ZodDate>;
    }, z.core.$strip>>>;
    _max: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        identifier: z.ZodNullable<z.ZodString>;
        value: z.ZodNullable<z.ZodString>;
        expiresAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodNullable<z.ZodDate>;
        updatedAt: z.ZodNullable<z.ZodDate>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
//# sourceMappingURL=VerificationAggregateResult.schema.d.ts.map
import * as z from 'zod';
export declare const ProductCategoryConfigUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    category: z.ZodUnknown;
    billingPeriods: z.ZodArray<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=ProductCategoryConfigUpsertResult.schema.d.ts.map
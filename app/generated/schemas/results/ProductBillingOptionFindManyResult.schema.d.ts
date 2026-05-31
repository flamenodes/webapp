import * as z from 'zod';
export declare const ProductBillingOptionFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        productId: z.ZodString;
        product: z.ZodUnknown;
        billingPeriod: z.ZodUnknown;
        price: z.ZodNumber;
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
//# sourceMappingURL=ProductBillingOptionFindManyResult.schema.d.ts.map
import * as z from 'zod';
export declare const ProductBillingOptionUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodUnknown;
    billingPeriod: z.ZodUnknown;
    price: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=ProductBillingOptionUpsertResult.schema.d.ts.map
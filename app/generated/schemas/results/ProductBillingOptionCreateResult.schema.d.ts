import * as z from 'zod';
export declare const ProductBillingOptionCreateResultSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodUnknown;
    billingPeriod: z.ZodUnknown;
    price: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=ProductBillingOptionCreateResult.schema.d.ts.map
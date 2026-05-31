import * as z from 'zod';
export declare const ProductBillingOptionResultSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodUnknown;
    billingPeriod: z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>;
    price: z.ZodNumber;
}, z.core.$strict>;
export type ProductBillingOptionResultType = z.infer<typeof ProductBillingOptionResultSchema>;
//# sourceMappingURL=ProductBillingOption.result.d.ts.map
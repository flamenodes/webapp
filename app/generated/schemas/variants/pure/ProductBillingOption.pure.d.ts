import * as z from 'zod';
export declare const ProductBillingOptionModelSchema: z.ZodObject<{
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
export type ProductBillingOptionPureType = z.infer<typeof ProductBillingOptionModelSchema>;
//# sourceMappingURL=ProductBillingOption.pure.d.ts.map
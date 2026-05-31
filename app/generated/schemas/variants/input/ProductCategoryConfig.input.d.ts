import * as z from 'zod';
export declare const ProductCategoryConfigInputSchema: z.ZodObject<{
    id: z.ZodString;
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
    billingPeriods: z.ZodArray<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type ProductCategoryConfigInputType = z.infer<typeof ProductCategoryConfigInputSchema>;
//# sourceMappingURL=ProductCategoryConfig.input.d.ts.map
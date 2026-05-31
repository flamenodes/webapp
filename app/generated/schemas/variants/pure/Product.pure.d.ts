import * as z from 'zod';
export declare const ProductModelSchema: z.ZodObject<{
    id: z.ZodString;
    planName: z.ZodString;
    icon: z.ZodNullable<z.ZodString>;
    badge: z.ZodNullable<z.ZodString>;
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
    price: z.ZodNumber;
    sortOrder: z.ZodNumber;
    features: z.ZodArray<z.ZodUnknown>;
    featureCategory: z.ZodString;
    inStock: z.ZodBoolean;
    discountId: z.ZodNullable<z.ZodString>;
    discount: z.ZodNullable<z.ZodUnknown>;
    specs: z.ZodUnknown;
    deployMode: z.ZodString;
    cartItems: z.ZodArray<z.ZodUnknown>;
    orderItems: z.ZodArray<z.ZodUnknown>;
    billingOptions: z.ZodArray<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type ProductPureType = z.infer<typeof ProductModelSchema>;
//# sourceMappingURL=Product.pure.d.ts.map
import * as z from 'zod';
export declare const ProductInputSchema: z.ZodObject<{
    id: z.ZodString;
    planName: z.ZodString;
    icon: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    badge: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
    discountId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    discount: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    specs: z.ZodUnknown;
    deployMode: z.ZodString;
    cartItems: z.ZodArray<z.ZodUnknown>;
    orderItems: z.ZodArray<z.ZodUnknown>;
    billingOptions: z.ZodArray<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type ProductInputType = z.infer<typeof ProductInputSchema>;
//# sourceMappingURL=Product.input.d.ts.map
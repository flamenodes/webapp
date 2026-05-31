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
    features: z.ZodArray<z.ZodAny>;
    featureCategory: z.ZodString;
    inStock: z.ZodBoolean;
    discountId: z.ZodNullable<z.ZodString>;
    discount: z.ZodNullable<z.ZodAny>;
    specs: z.ZodAny;
    deployMode: z.ZodString;
    cartItems: z.ZodArray<z.ZodAny>;
    orderItems: z.ZodArray<z.ZodAny>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export type ProductPureType = z.infer<typeof ProductModelSchema>;
//# sourceMappingURL=Product.pure.d.ts.map
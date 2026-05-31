import * as z from 'zod';
export declare const ProductSchema: z.ZodObject<{
    id: z.ZodString;
    planName: z.ZodString;
    icon: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    badge: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    featureCategory: z.ZodDefault<z.ZodString>;
    inStock: z.ZodDefault<z.ZodBoolean>;
    discountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    specs: z.ZodDefault<z.ZodAny>;
    deployMode: z.ZodDefault<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type ProductType = z.infer<typeof ProductSchema>;
//# sourceMappingURL=Product.schema.d.ts.map
import * as z from 'zod';
export declare const ProductDeleteResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    planName: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    category: z.ZodAny;
    price: z.ZodNumber;
    sortOrder: z.ZodNumber;
    features: z.ZodArray<z.ZodAny>;
    featureCategory: z.ZodString;
    inStock: z.ZodBoolean;
    discountId: z.ZodOptional<z.ZodString>;
    discount: z.ZodOptional<z.ZodAny>;
    specs: z.ZodAny;
    deployMode: z.ZodString;
    cartItems: z.ZodArray<z.ZodAny>;
    orderItems: z.ZodArray<z.ZodAny>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>>;
//# sourceMappingURL=ProductDeleteResult.schema.d.ts.map
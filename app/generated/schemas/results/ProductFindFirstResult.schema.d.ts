import * as z from 'zod';
export declare const ProductFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    planName: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    category: z.ZodUnknown;
    price: z.ZodNumber;
    sortOrder: z.ZodNumber;
    features: z.ZodArray<z.ZodUnknown>;
    featureCategory: z.ZodString;
    inStock: z.ZodBoolean;
    discountId: z.ZodOptional<z.ZodString>;
    discount: z.ZodOptional<z.ZodUnknown>;
    specs: z.ZodUnknown;
    deployMode: z.ZodString;
    cartItems: z.ZodArray<z.ZodUnknown>;
    orderItems: z.ZodArray<z.ZodUnknown>;
    billingOptions: z.ZodArray<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=ProductFindFirstResult.schema.d.ts.map
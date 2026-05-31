import * as z from 'zod';
export declare const ProductFeatureModelSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodUnknown;
    label: z.ZodString;
    sortOrder: z.ZodNumber;
}, z.core.$strict>;
export type ProductFeaturePureType = z.infer<typeof ProductFeatureModelSchema>;
//# sourceMappingURL=ProductFeature.pure.d.ts.map
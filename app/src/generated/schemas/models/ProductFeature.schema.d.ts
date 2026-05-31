import * as z from 'zod';
export declare const ProductFeatureSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    label: z.ZodString;
    sortOrder: z.ZodNumber;
}, z.core.$strip>;
export type ProductFeatureType = z.infer<typeof ProductFeatureSchema>;
//# sourceMappingURL=ProductFeature.schema.d.ts.map
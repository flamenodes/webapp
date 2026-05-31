import * as z from 'zod';
export declare const ProductFeatureInputSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodAny;
    label: z.ZodString;
    sortOrder: z.ZodNumber;
}, z.core.$strict>;
export type ProductFeatureInputType = z.infer<typeof ProductFeatureInputSchema>;
//# sourceMappingURL=ProductFeature.input.d.ts.map
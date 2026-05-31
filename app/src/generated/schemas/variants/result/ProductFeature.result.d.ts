import * as z from 'zod';
export declare const ProductFeatureResultSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodAny;
    label: z.ZodString;
    sortOrder: z.ZodNumber;
}, z.core.$strict>;
export type ProductFeatureResultType = z.infer<typeof ProductFeatureResultSchema>;
//# sourceMappingURL=ProductFeature.result.d.ts.map
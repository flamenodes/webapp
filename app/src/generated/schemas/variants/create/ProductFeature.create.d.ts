import * as z from 'zod';
export declare const ProductFeatureCreateSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodAny;
    label: z.ZodString;
    sortOrder: z.ZodNumber;
}, z.core.$strict>;
export type ProductFeatureCreateType = z.infer<typeof ProductFeatureCreateSchema>;
//# sourceMappingURL=ProductFeature.create.d.ts.map
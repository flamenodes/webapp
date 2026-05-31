import * as z from 'zod';
export declare const ProductFeatureCreateResultSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodAny;
    label: z.ZodString;
    sortOrder: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=ProductFeatureCreateResult.schema.d.ts.map
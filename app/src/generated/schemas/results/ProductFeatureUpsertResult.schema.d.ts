import * as z from 'zod';
export declare const ProductFeatureUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    productId: z.ZodString;
    product: z.ZodAny;
    label: z.ZodString;
    sortOrder: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=ProductFeatureUpsertResult.schema.d.ts.map
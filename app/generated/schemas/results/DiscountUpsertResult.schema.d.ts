import * as z from 'zod';
export declare const DiscountUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodUnknown>;
}, z.core.$strip>;
//# sourceMappingURL=DiscountUpsertResult.schema.d.ts.map
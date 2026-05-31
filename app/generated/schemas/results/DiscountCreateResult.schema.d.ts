import * as z from 'zod';
export declare const DiscountCreateResultSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodUnknown>;
}, z.core.$strip>;
//# sourceMappingURL=DiscountCreateResult.schema.d.ts.map
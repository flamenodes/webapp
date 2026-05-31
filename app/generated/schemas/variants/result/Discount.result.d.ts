import * as z from 'zod';
export declare const DiscountResultSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodUnknown>;
}, z.core.$strict>;
export type DiscountResultType = z.infer<typeof DiscountResultSchema>;
//# sourceMappingURL=Discount.result.d.ts.map
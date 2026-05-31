import * as z from 'zod';
export declare const DiscountInputSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodUnknown>;
}, z.core.$strict>;
export type DiscountInputType = z.infer<typeof DiscountInputSchema>;
//# sourceMappingURL=Discount.input.d.ts.map
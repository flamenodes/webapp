import * as z from 'zod';
export declare const DiscountModelSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodUnknown>;
}, z.core.$strict>;
export type DiscountPureType = z.infer<typeof DiscountModelSchema>;
//# sourceMappingURL=Discount.pure.d.ts.map
import * as z from 'zod';
export declare const DiscountSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
}, z.core.$strip>;
export type DiscountType = z.infer<typeof DiscountSchema>;
//# sourceMappingURL=Discount.schema.d.ts.map
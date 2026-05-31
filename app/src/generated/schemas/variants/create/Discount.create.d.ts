import * as z from 'zod';
export declare const DiscountCreateSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodAny>;
}, z.core.$strict>;
export type DiscountCreateType = z.infer<typeof DiscountCreateSchema>;
//# sourceMappingURL=Discount.create.d.ts.map
import * as z from 'zod';
export declare const DiscountUpdateResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodUnknown>;
}, z.core.$strip>>;
//# sourceMappingURL=DiscountUpdateResult.schema.d.ts.map
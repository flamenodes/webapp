import * as z from 'zod';
export declare const DiscountDeleteResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodUnknown>;
}, z.core.$strip>>;
//# sourceMappingURL=DiscountDeleteResult.schema.d.ts.map
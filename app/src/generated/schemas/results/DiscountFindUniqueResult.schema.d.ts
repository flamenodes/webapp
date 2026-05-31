import * as z from 'zod';
export declare const DiscountFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    percentage: z.ZodNumber;
    product: z.ZodArray<z.ZodAny>;
}, z.core.$strip>>;
//# sourceMappingURL=DiscountFindUniqueResult.schema.d.ts.map
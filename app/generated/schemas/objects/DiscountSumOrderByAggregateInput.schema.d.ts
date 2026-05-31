import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DiscountSumOrderByAggregateInput>;
export declare const DiscountSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    percentage: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountSumOrderByAggregateInput.schema.d.ts.map
import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemSumOrderByAggregateInput>;
export declare const CartItemSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    quantity: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemSumOrderByAggregateInput.schema.d.ts.map
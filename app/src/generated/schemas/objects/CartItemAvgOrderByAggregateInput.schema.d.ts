import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemAvgOrderByAggregateInput>;
export declare const CartItemAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    quantity: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemAvgOrderByAggregateInput.schema.d.ts.map
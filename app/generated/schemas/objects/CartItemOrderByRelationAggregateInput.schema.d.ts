import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CartItemOrderByRelationAggregateInput>;
export declare const CartItemOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemOrderByRelationAggregateInput.schema.d.ts.map
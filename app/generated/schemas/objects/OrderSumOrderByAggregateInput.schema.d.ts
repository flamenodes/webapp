import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderSumOrderByAggregateInput>;
export declare const OrderSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    subtotalAmount: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    discountAmount: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    totalAmount: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderSumOrderByAggregateInput.schema.d.ts.map
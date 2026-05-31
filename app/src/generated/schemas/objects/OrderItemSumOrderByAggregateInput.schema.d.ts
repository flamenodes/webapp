import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemSumOrderByAggregateInput>;
export declare const OrderItemSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    quantity: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    unitPrice: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    totalPrice: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderItemSumOrderByAggregateInput.schema.d.ts.map
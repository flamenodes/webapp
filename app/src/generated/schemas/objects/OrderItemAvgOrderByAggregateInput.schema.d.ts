import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const OrderItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderItemAvgOrderByAggregateInput>;
export declare const OrderItemAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=OrderItemAvgOrderByAggregateInput.schema.d.ts.map
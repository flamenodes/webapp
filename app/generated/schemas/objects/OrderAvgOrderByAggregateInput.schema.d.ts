import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrderAvgOrderByAggregateInput>;
export declare const OrderAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=OrderAvgOrderByAggregateInput.schema.d.ts.map
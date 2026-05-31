import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartMaxOrderByAggregateInput>;
export declare const CartMaxOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    userId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    couponCode: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=CartMaxOrderByAggregateInput.schema.d.ts.map
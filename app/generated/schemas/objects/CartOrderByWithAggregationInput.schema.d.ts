import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CartOrderByWithAggregationInput>;
export declare const CartOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    userId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    couponCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    createdAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    updatedAt: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCountOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.CartMinOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartOrderByWithAggregationInput.schema.d.ts.map
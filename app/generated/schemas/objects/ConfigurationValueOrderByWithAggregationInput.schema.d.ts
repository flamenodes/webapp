import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ConfigurationValueOrderByWithAggregationInput>;
export declare const ConfigurationValueOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    optionId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    label: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    value: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    description: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    priceModifier: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    metadata: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>, z.ZodLazy<z.ZodType<Prisma.SortOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.SortOrderInput, unknown>>>]>>;
    sortOrder: z.ZodOptional<z.ZodEnum<{
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
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCountOrderByAggregateInput, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueAvgOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueAvgOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueMinOrderByAggregateInput, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueSumOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueSumOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueOrderByWithAggregationInput.schema.d.ts.map
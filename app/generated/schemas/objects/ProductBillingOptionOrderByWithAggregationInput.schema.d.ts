import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionOrderByWithAggregationInput>;
export declare const ProductBillingOptionOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    productId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    billingPeriod: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    price: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionCountOrderByAggregateInput, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionAvgOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionAvgOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionMinOrderByAggregateInput, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionSumOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionSumOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionOrderByWithAggregationInput.schema.d.ts.map
import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const DiscountFindFirstSelectSchema: z.ZodType<Prisma.DiscountSelect>;
export declare const DiscountFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodBoolean>;
    percentage: z.ZodOptional<z.ZodBoolean>;
    product: z.ZodOptional<z.ZodBoolean>;
    _count: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const DiscountFindFirstSchema: z.ZodType<Prisma.DiscountFindFirstArgs>;
export declare const DiscountFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.DiscountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.DiscountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.DiscountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        label: "label";
        percentage: "percentage";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        label: "label";
        percentage: "percentage";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstDiscount.schema.d.ts.map
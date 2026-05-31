import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CouponGroupBySchema: z.ZodType<Prisma.CouponGroupByArgs>;
export declare const CouponGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CouponOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CouponOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        type: "type";
        code: "code";
        id: "id";
        description: "description";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        expiresAt: "expiresAt";
        amount: "amount";
        active: "active";
        maxUses: "maxUses";
        usedCount: "usedCount";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CouponCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.CouponMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.CouponMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.CouponAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.CouponSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByCoupon.schema.d.ts.map
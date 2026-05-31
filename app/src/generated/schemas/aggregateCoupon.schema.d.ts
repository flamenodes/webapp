import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CouponAggregateSchema: z.ZodType<Prisma.CouponAggregateArgs>;
export declare const CouponAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CouponOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CouponOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CouponWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CouponCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.CouponMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.CouponMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponMaxAggregateInputType, unknown>>>;
    _avg: z.ZodOptional<z.ZodType<Prisma.CouponAvgAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponAvgAggregateInputType, unknown>>>;
    _sum: z.ZodOptional<z.ZodType<Prisma.CouponSumAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponSumAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateCoupon.schema.d.ts.map
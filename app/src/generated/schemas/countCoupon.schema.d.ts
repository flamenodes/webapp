import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CouponCountSchema: z.ZodType<Prisma.CouponCountArgs>;
export declare const CouponCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CouponOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CouponOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CouponWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.CouponCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.CouponCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countCoupon.schema.d.ts.map
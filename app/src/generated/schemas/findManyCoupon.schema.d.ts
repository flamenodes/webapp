import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const CouponFindManySelectSchema: z.ZodType<Prisma.CouponSelect>;
export declare const CouponFindManySelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    code: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodBoolean>;
    amount: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodBoolean>;
    active: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodOptional<z.ZodBoolean>;
    maxUses: z.ZodOptional<z.ZodBoolean>;
    usedCount: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const CouponFindManySchema: z.ZodType<Prisma.CouponFindManyArgs>;
export declare const CouponFindManyZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.CouponSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.CouponOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.CouponOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.CouponWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
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
    }>, z.ZodArray<z.ZodEnum<{
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
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findManyCoupon.schema.d.ts.map
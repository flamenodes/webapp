import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CouponWhereInputObjectSchema: z.ZodType<Prisma.CouponWhereInput>;
export declare const CouponWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CouponWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumCouponTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumCouponTypeFilter<never>, unknown>>>, z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>]>>;
    amount: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableFilter<never>, unknown>>>, z.ZodString]>>>;
    active: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.BoolFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.BoolFilter<never>, unknown>>>, z.ZodBoolean]>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeNullableFilter<never>, unknown>>>, z.ZodString]>>>;
    maxUses: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntNullableFilter<never>, unknown>>>, z.ZodNumber]>>>;
    usedCount: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodString]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodString]>>;
}, z.core.$strict>;
//# sourceMappingURL=CouponWhereInput.schema.d.ts.map
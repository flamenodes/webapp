import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CouponScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput>;
export declare const CouponScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.CouponScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumCouponTypeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumCouponTypeWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>]>>;
    amount: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntWithAggregatesFilter<never>, unknown>>>, z.ZodNumber]>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringNullableWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>>;
    active: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.BoolWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.BoolWithAggregatesFilter<never>, unknown>>>, z.ZodBoolean]>>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeNullableWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>>;
    maxUses: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntNullableWithAggregatesFilter<never>, unknown>>>, z.ZodNumber]>>>;
    usedCount: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntWithAggregatesFilter<never>, unknown>>>, z.ZodNumber]>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=CouponScalarWhereWithAggregatesInput.schema.d.ts.map
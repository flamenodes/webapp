import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedEnumCouponTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumCouponTypeWithAggregatesFilter>;
export declare const NestedEnumCouponTypeWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumCouponTypeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumCouponTypeWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumCouponTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumCouponTypeFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumCouponTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumCouponTypeFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumCouponTypeWithAggregatesFilter.schema.d.ts.map
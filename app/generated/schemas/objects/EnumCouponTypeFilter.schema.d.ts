import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumCouponTypeFilterObjectSchema: z.ZodType<Prisma.EnumCouponTypeFilter>;
export declare const EnumCouponTypeFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumCouponTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumCouponTypeFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumCouponTypeFilter.schema.d.ts.map
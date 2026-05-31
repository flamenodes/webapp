import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedEnumCouponTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumCouponTypeFilter>;
export declare const NestedEnumCouponTypeFilterObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=NestedEnumCouponTypeFilter.schema.d.ts.map
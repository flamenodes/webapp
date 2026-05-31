import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedEnumBillingPeriodWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumBillingPeriodWithAggregatesFilter>;
export declare const NestedEnumBillingPeriodWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumBillingPeriodWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumBillingPeriodWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumBillingPeriodFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumBillingPeriodFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumBillingPeriodFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumBillingPeriodFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumBillingPeriodWithAggregatesFilter.schema.d.ts.map
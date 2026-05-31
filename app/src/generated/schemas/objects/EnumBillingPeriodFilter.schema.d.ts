import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const EnumBillingPeriodFilterObjectSchema: z.ZodType<Prisma.EnumBillingPeriodFilter>;
export declare const EnumBillingPeriodFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumBillingPeriodFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumBillingPeriodFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumBillingPeriodFilter.schema.d.ts.map
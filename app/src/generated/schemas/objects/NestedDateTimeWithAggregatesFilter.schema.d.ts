import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const NestedDateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;
export declare const NestedDateTimeWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodString>;
    in: z.ZodOptional<z.ZodArray<z.ZodString>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodString>>;
    lt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedDateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedDateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedDateTimeWithAggregatesFilter.schema.d.ts.map
import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedDateTimeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter>;
export declare const NestedDateTimeNullableWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    in: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>>;
    notIn: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>>;
    lt: z.ZodOptional<z.ZodDate>;
    lte: z.ZodOptional<z.ZodDate>;
    gt: z.ZodOptional<z.ZodDate>;
    gte: z.ZodOptional<z.ZodDate>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodDate, z.ZodLazy<z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeNullableWithAggregatesFilter<never>, unknown>>>]>>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntNullableFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedDateTimeNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeNullableFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedDateTimeNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeNullableFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedDateTimeNullableWithAggregatesFilter.schema.d.ts.map
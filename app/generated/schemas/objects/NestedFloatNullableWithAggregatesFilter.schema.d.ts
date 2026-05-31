import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedFloatNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter>;
export declare const NestedFloatNullableWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    in: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber>>>;
    notIn: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber>>>;
    lt: z.ZodOptional<z.ZodNumber>;
    lte: z.ZodOptional<z.ZodNumber>;
    gt: z.ZodOptional<z.ZodNumber>;
    gte: z.ZodOptional<z.ZodNumber>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedFloatNullableWithAggregatesFilter<never>, unknown>>>]>>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntNullableFilter<never>, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedFloatNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedFloatNullableFilter<never>, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedFloatNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedFloatNullableFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedFloatNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedFloatNullableFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedFloatNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedFloatNullableFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedFloatNullableWithAggregatesFilter.schema.d.ts.map
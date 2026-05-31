import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StringNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter>;
export declare const StringNullableWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    in: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    notIn: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    lt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    contains: z.ZodOptional<z.ZodString>;
    startsWith: z.ZodOptional<z.ZodString>;
    endsWith: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodEnum<{
        default: "default";
        insensitive: "insensitive";
    }>>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringNullableWithAggregatesFilter<never>, unknown>>>]>>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntNullableFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedStringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringNullableFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedStringNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringNullableFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=StringNullableWithAggregatesFilter.schema.d.ts.map
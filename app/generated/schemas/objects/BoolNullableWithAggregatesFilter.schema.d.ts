import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const BoolNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter>;
export declare const BoolNullableWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    not: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolNullableWithAggregatesFilter<never>, unknown>>>]>>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntNullableFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedBoolNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolNullableFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedBoolNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolNullableFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=BoolNullableWithAggregatesFilter.schema.d.ts.map
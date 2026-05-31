import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const IntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.IntWithAggregatesFilter>;
export declare const IntWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodNumber>;
    in: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    lt: z.ZodOptional<z.ZodNumber>;
    lte: z.ZodOptional<z.ZodNumber>;
    gt: z.ZodOptional<z.ZodNumber>;
    gte: z.ZodOptional<z.ZodNumber>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.NestedIntWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _avg: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedFloatFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedFloatFilter<never>, unknown>>>>;
    _sum: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=IntWithAggregatesFilter.schema.d.ts.map
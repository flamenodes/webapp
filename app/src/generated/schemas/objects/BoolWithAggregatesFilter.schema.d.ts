import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const BoolWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BoolWithAggregatesFilter>;
export declare const BoolWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodBoolean>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.NestedBoolWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedBoolFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedBoolFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedBoolFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=BoolWithAggregatesFilter.schema.d.ts.map
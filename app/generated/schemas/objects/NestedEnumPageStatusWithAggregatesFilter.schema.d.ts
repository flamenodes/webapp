import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedEnumPageStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPageStatusWithAggregatesFilter>;
export declare const NestedEnumPageStatusWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumPageStatusWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumPageStatusWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumPageStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumPageStatusFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumPageStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumPageStatusFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumPageStatusWithAggregatesFilter.schema.d.ts.map
import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedEnumPageStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumPageStatusFilter>;
export declare const NestedEnumPageStatusFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumPageStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumPageStatusFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumPageStatusFilter.schema.d.ts.map
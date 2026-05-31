import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const EnumProductCategoryWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumProductCategoryWithAggregatesFilter>;
export declare const EnumProductCategoryWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumProductCategoryWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumProductCategoryWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumProductCategoryFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumProductCategoryFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumProductCategoryFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumProductCategoryFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumProductCategoryWithAggregatesFilter.schema.d.ts.map
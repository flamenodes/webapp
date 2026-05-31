import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const EnumProductCategoryFilterObjectSchema: z.ZodType<Prisma.EnumProductCategoryFilter>;
export declare const EnumProductCategoryFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumProductCategoryFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumProductCategoryFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumProductCategoryFilter.schema.d.ts.map
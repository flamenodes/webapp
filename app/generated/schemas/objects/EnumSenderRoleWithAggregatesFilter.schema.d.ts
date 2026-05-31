import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumSenderRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSenderRoleWithAggregatesFilter>;
export declare const EnumSenderRoleWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        USER: "USER";
        SUPPORT: "SUPPORT";
        ADMIN: "ADMIN";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumSenderRoleWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumSenderRoleWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumSenderRoleFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumSenderRoleFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumSenderRoleFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumSenderRoleFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumSenderRoleWithAggregatesFilter.schema.d.ts.map
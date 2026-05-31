import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumSenderRoleFilterObjectSchema: z.ZodType<Prisma.EnumSenderRoleFilter>;
export declare const EnumSenderRoleFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumSenderRoleFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumSenderRoleFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumSenderRoleFilter.schema.d.ts.map
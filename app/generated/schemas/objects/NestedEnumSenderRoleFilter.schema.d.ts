import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NestedEnumSenderRoleFilterObjectSchema: z.ZodType<Prisma.NestedEnumSenderRoleFilter>;
export declare const NestedEnumSenderRoleFilterObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=NestedEnumSenderRoleFilter.schema.d.ts.map
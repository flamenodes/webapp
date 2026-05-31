import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const VerificationFindFirstSelectSchema: z.ZodType<Prisma.VerificationSelect>;
export declare const VerificationFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    identifier: z.ZodOptional<z.ZodBoolean>;
    value: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const VerificationFindFirstSchema: z.ZodType<Prisma.VerificationFindFirstArgs>;
export declare const VerificationFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.VerificationSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.VerificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.VerificationOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.VerificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.VerificationWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.VerificationWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        value: "value";
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        expiresAt: "expiresAt";
        identifier: "identifier";
    }>, z.ZodArray<z.ZodEnum<{
        value: "value";
        id: "id";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
        expiresAt: "expiresAt";
        identifier: "identifier";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstVerification.schema.d.ts.map
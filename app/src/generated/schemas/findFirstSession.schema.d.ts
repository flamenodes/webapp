import type { Prisma } from '../prisma/client';
import * as z from 'zod';
export declare const SessionFindFirstSelectSchema: z.ZodType<Prisma.SessionSelect>;
export declare const SessionFindFirstSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodOptional<z.ZodBoolean>;
    token: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
    ipAddress: z.ZodOptional<z.ZodBoolean>;
    userAgent: z.ZodOptional<z.ZodBoolean>;
    userId: z.ZodOptional<z.ZodBoolean>;
    user: z.ZodOptional<z.ZodBoolean>;
    impersonatedBy: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const SessionFindFirstSchema: z.ZodType<Prisma.SessionFindFirstArgs>;
export declare const SessionFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.SessionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.SessionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.SessionOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.SessionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.SessionWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.SessionWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        updatedAt: "updatedAt";
        expiresAt: "expiresAt";
        token: "token";
        ipAddress: "ipAddress";
        userAgent: "userAgent";
        impersonatedBy: "impersonatedBy";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        updatedAt: "updatedAt";
        expiresAt: "expiresAt";
        token: "token";
        ipAddress: "ipAddress";
        userAgent: "userAgent";
        impersonatedBy: "impersonatedBy";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstSession.schema.d.ts.map
import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const AccountFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AccountSelect>;
export declare const AccountFindFirstOrThrowSelectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    accountId: z.ZodOptional<z.ZodBoolean>;
    providerId: z.ZodOptional<z.ZodBoolean>;
    userId: z.ZodOptional<z.ZodBoolean>;
    user: z.ZodOptional<z.ZodBoolean>;
    accessToken: z.ZodOptional<z.ZodBoolean>;
    refreshToken: z.ZodOptional<z.ZodBoolean>;
    idToken: z.ZodOptional<z.ZodBoolean>;
    accessTokenExpiresAt: z.ZodOptional<z.ZodBoolean>;
    refreshTokenExpiresAt: z.ZodOptional<z.ZodBoolean>;
    scope: z.ZodOptional<z.ZodBoolean>;
    password: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const AccountFindFirstOrThrowSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs>;
export declare const AccountFindFirstOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        updatedAt: "updatedAt";
        accountId: "accountId";
        providerId: "providerId";
        accessToken: "accessToken";
        refreshToken: "refreshToken";
        idToken: "idToken";
        accessTokenExpiresAt: "accessTokenExpiresAt";
        refreshTokenExpiresAt: "refreshTokenExpiresAt";
        scope: "scope";
        password: "password";
    }>, z.ZodArray<z.ZodEnum<{
        id: "id";
        createdAt: "createdAt";
        userId: "userId";
        updatedAt: "updatedAt";
        accountId: "accountId";
        providerId: "providerId";
        accessToken: "accessToken";
        refreshToken: "refreshToken";
        idToken: "idToken";
        accessTokenExpiresAt: "accessTokenExpiresAt";
        refreshTokenExpiresAt: "refreshTokenExpiresAt";
        scope: "scope";
        password: "password";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstOrThrowAccount.schema.d.ts.map
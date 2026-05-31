import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const AccountCreateInputObjectSchema: z.ZodType<Prisma.AccountCreateInput>;
export declare const AccountCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    providerId: z.ZodString;
    accessToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    refreshToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    idToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    accessTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    refreshTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    scope: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    password: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    user: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutAccountsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCreateInput.schema.d.ts.map
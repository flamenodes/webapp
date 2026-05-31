import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const AccountUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput>;
export declare const AccountUncheckedCreateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    providerId: z.ZodString;
    accessToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    refreshToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    idToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    accessTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    refreshTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    scope: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    password: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUncheckedCreateWithoutUserInput.schema.d.ts.map
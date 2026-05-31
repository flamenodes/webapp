import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const AccountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateInput>;
export declare const AccountUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    providerId: z.ZodString;
    userId: z.ZodString;
    accessToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    refreshToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    idToken: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    accessTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    refreshTokenExpiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    scope: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    password: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUncheckedCreateInput.schema.d.ts.map
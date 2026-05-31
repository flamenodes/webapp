import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SessionCreateInputObjectSchema: z.ZodType<Prisma.SessionCreateInput>;
export declare const SessionCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodCoercedDate<unknown>;
    token: z.ZodString;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    user: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutSessionsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionCreateInput.schema.d.ts.map
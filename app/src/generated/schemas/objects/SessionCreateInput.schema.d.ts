import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionCreateInputObjectSchema: z.ZodType<Prisma.SessionCreateInput>;
export declare const SessionCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    user: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutSessionsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionCreateInput.schema.d.ts.map
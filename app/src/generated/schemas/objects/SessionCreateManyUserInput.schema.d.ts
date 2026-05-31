import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionCreateManyUserInputObjectSchema: z.ZodType<Prisma.SessionCreateManyUserInput>;
export declare const SessionCreateManyUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionCreateManyUserInput.schema.d.ts.map
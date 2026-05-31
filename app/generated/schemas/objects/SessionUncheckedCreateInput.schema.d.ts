import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SessionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateInput>;
export declare const SessionUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodCoercedDate<unknown>;
    token: z.ZodString;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userId: z.ZodString;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionUncheckedCreateInput.schema.d.ts.map
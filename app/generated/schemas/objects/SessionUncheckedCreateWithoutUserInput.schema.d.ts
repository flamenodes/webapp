import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SessionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput>;
export declare const SessionUncheckedCreateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodCoercedDate<unknown>;
    token: z.ZodString;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionUncheckedCreateWithoutUserInput.schema.d.ts.map
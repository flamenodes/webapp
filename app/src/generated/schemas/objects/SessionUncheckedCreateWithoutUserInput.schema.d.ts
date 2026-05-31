import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput>;
export declare const SessionUncheckedCreateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionUncheckedCreateWithoutUserInput.schema.d.ts.map
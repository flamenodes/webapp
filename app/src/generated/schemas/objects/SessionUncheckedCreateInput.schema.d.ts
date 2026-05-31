import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateInput>;
export declare const SessionUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userId: z.ZodString;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionUncheckedCreateInput.schema.d.ts.map
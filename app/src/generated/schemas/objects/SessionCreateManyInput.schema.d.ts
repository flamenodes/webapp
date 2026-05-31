import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const SessionCreateManyInputObjectSchema: z.ZodType<Prisma.SessionCreateManyInput>;
export declare const SessionCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    expiresAt: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    ipAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userAgent: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userId: z.ZodString;
    impersonatedBy: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
//# sourceMappingURL=SessionCreateManyInput.schema.d.ts.map
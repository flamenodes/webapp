import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const VerificationCreateInputObjectSchema: z.ZodType<Prisma.VerificationCreateInput>;
export declare const VerificationCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=VerificationCreateInput.schema.d.ts.map
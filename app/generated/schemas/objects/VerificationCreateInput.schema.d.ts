import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const VerificationCreateInputObjectSchema: z.ZodType<Prisma.VerificationCreateInput>;
export declare const VerificationCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodCoercedDate<unknown>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=VerificationCreateInput.schema.d.ts.map
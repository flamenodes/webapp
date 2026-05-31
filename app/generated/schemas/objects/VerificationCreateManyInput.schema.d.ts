import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const VerificationCreateManyInputObjectSchema: z.ZodType<Prisma.VerificationCreateManyInput>;
export declare const VerificationCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodCoercedDate<unknown>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=VerificationCreateManyInput.schema.d.ts.map
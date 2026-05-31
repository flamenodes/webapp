import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const VerificationCreateManyInputObjectSchema: z.ZodType<Prisma.VerificationCreateManyInput>;
export declare const VerificationCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=VerificationCreateManyInput.schema.d.ts.map
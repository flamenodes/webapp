import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const VerificationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput>;
export declare const VerificationUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodString;
    identifier: z.ZodString;
    value: z.ZodString;
    expiresAt: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=VerificationUncheckedCreateInput.schema.d.ts.map
import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const VerificationSelectObjectSchema: z.ZodType<Prisma.VerificationSelect>;
export declare const VerificationSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    identifier: z.ZodOptional<z.ZodBoolean>;
    value: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=VerificationSelect.schema.d.ts.map
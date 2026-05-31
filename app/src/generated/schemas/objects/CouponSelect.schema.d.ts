import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CouponSelectObjectSchema: z.ZodType<Prisma.CouponSelect>;
export declare const CouponSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    code: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodBoolean>;
    amount: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodBoolean>;
    active: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodOptional<z.ZodBoolean>;
    maxUses: z.ZodOptional<z.ZodBoolean>;
    usedCount: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=CouponSelect.schema.d.ts.map
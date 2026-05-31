import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CouponCreateInputObjectSchema: z.ZodType<Prisma.CouponCreateInput>;
export declare const CouponCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    code: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>>;
    amount: z.ZodNumber;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    active: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    maxUses: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    usedCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=CouponCreateInput.schema.d.ts.map
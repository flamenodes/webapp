import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CouponCreateManyInputObjectSchema: z.ZodType<Prisma.CouponCreateManyInput>;
export declare const CouponCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    code: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>>;
    amount: z.ZodNumber;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    active: z.ZodOptional<z.ZodBoolean>;
    expiresAt: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    maxUses: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    usedCount: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=CouponCreateManyInput.schema.d.ts.map
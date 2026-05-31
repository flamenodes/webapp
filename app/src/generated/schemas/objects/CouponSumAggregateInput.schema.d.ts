import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CouponSumAggregateInputObjectSchema: z.ZodType<Prisma.CouponSumAggregateInputType>;
export declare const CouponSumAggregateInputObjectZodSchema: z.ZodObject<{
    amount: z.ZodOptional<z.ZodLiteral<true>>;
    maxUses: z.ZodOptional<z.ZodLiteral<true>>;
    usedCount: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CouponSumAggregateInput.schema.d.ts.map
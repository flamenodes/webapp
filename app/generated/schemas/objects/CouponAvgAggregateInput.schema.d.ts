import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CouponAvgAggregateInputObjectSchema: z.ZodType<Prisma.CouponAvgAggregateInputType>;
export declare const CouponAvgAggregateInputObjectZodSchema: z.ZodObject<{
    amount: z.ZodOptional<z.ZodLiteral<true>>;
    maxUses: z.ZodOptional<z.ZodLiteral<true>>;
    usedCount: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CouponAvgAggregateInput.schema.d.ts.map
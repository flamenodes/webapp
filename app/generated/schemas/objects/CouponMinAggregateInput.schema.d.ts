import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CouponMinAggregateInputObjectSchema: z.ZodType<Prisma.CouponMinAggregateInputType>;
export declare const CouponMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    code: z.ZodOptional<z.ZodLiteral<true>>;
    type: z.ZodOptional<z.ZodLiteral<true>>;
    amount: z.ZodOptional<z.ZodLiteral<true>>;
    description: z.ZodOptional<z.ZodLiteral<true>>;
    active: z.ZodOptional<z.ZodLiteral<true>>;
    expiresAt: z.ZodOptional<z.ZodLiteral<true>>;
    maxUses: z.ZodOptional<z.ZodLiteral<true>>;
    usedCount: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CouponMinAggregateInput.schema.d.ts.map
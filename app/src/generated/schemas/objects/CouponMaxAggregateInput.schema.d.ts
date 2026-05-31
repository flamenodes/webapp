import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CouponMaxAggregateInputObjectSchema: z.ZodType<Prisma.CouponMaxAggregateInputType>;
export declare const CouponMaxAggregateInputObjectZodSchema: z.ZodObject<{
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
//# sourceMappingURL=CouponMaxAggregateInput.schema.d.ts.map
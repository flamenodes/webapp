import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartCountAggregateInputObjectSchema: z.ZodType<Prisma.CartCountAggregateInputType>;
export declare const CartCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    userId: z.ZodOptional<z.ZodLiteral<true>>;
    couponCode: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CartCountAggregateInput.schema.d.ts.map
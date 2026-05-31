import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartMinAggregateInputObjectSchema: z.ZodType<Prisma.CartMinAggregateInputType>;
export declare const CartMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    userId: z.ZodOptional<z.ZodLiteral<true>>;
    couponCode: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CartMinAggregateInput.schema.d.ts.map
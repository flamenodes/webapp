import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const CartMaxAggregateInputObjectSchema: z.ZodType<Prisma.CartMaxAggregateInputType>;
export declare const CartMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    userId: z.ZodOptional<z.ZodLiteral<true>>;
    couponCode: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=CartMaxAggregateInput.schema.d.ts.map
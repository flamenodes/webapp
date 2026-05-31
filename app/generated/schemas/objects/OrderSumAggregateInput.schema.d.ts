import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderSumAggregateInputObjectSchema: z.ZodType<Prisma.OrderSumAggregateInputType>;
export declare const OrderSumAggregateInputObjectZodSchema: z.ZodObject<{
    subtotalAmount: z.ZodOptional<z.ZodLiteral<true>>;
    discountAmount: z.ZodOptional<z.ZodLiteral<true>>;
    totalAmount: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderSumAggregateInput.schema.d.ts.map
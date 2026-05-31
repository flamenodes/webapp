import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrderMaxAggregateInputType>;
export declare const OrderMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    userId: z.ZodOptional<z.ZodLiteral<true>>;
    status: z.ZodOptional<z.ZodLiteral<true>>;
    subtotalAmount: z.ZodOptional<z.ZodLiteral<true>>;
    discountAmount: z.ZodOptional<z.ZodLiteral<true>>;
    totalAmount: z.ZodOptional<z.ZodLiteral<true>>;
    couponCode: z.ZodOptional<z.ZodLiteral<true>>;
    deliveryMessage: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderMaxAggregateInput.schema.d.ts.map
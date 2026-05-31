import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const OrderAvgAggregateInputObjectSchema: z.ZodType<Prisma.OrderAvgAggregateInputType>;
export declare const OrderAvgAggregateInputObjectZodSchema: z.ZodObject<{
    subtotalAmount: z.ZodOptional<z.ZodLiteral<true>>;
    discountAmount: z.ZodOptional<z.ZodLiteral<true>>;
    totalAmount: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=OrderAvgAggregateInput.schema.d.ts.map
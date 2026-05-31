import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCountAggregateInputType>;
export declare const ProductBillingOptionCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    productId: z.ZodOptional<z.ZodLiteral<true>>;
    billingPeriod: z.ZodOptional<z.ZodLiteral<true>>;
    price: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionCountAggregateInput.schema.d.ts.map
import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export declare const ProductCountOutputTypeSelectObjectZodSchema: z.ZodObject<{
    features: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductFeatureWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductFeatureWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    cartItems: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    orderItems: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderItemWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
    billingOptions: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCountOutputTypeSelect.schema.d.ts.map
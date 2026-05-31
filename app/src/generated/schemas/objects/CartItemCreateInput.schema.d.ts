import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemCreateInputObjectSchema: z.ZodType<Prisma.CartItemCreateInput>;
export declare const CartItemCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    quantity: z.ZodOptional<z.ZodNumber>;
    billingPeriod: z.ZodOptional<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>;
    createdAt: z.ZodOptional<z.ZodString>;
    cart: z.ZodLazy<z.ZodType<Prisma.CartCreateNestedOneWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateNestedOneWithoutItemsInput, unknown>>>;
    product: z.ZodLazy<z.ZodType<Prisma.ProductCreateNestedOneWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateNestedOneWithoutCartItemsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateInput.schema.d.ts.map
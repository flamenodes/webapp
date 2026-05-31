import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutProductInput>;
export declare const CartItemCreateWithoutProductInputObjectZodSchema: z.ZodObject<{
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
    updatedAt: z.ZodOptional<z.ZodString>;
    cart: z.ZodLazy<z.ZodType<Prisma.CartCreateNestedOneWithoutItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.CartCreateNestedOneWithoutItemsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateWithoutProductInput.schema.d.ts.map
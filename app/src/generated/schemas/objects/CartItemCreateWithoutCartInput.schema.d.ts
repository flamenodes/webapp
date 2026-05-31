import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemCreateWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemCreateWithoutCartInput>;
export declare const CartItemCreateWithoutCartInputObjectZodSchema: z.ZodObject<{
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
    product: z.ZodLazy<z.ZodType<Prisma.ProductCreateNestedOneWithoutCartItemsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateNestedOneWithoutCartItemsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateWithoutCartInput.schema.d.ts.map
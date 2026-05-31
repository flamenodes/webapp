import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemCreateManyProductInputObjectSchema: z.ZodType<Prisma.CartItemCreateManyProductInput>;
export declare const CartItemCreateManyProductInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    cartId: z.ZodString;
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
}, z.core.$strict>;
//# sourceMappingURL=CartItemCreateManyProductInput.schema.d.ts.map
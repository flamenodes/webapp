import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateInput>;
export declare const CartItemUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    cartId: z.ZodString;
    productId: z.ZodString;
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
}, z.core.$strict>;
//# sourceMappingURL=CartItemUncheckedCreateInput.schema.d.ts.map
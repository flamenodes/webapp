import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartItemUncheckedCreateWithoutCartInputObjectSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutCartInput>;
export declare const CartItemUncheckedCreateWithoutCartInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
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
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=CartItemUncheckedCreateWithoutCartInput.schema.d.ts.map
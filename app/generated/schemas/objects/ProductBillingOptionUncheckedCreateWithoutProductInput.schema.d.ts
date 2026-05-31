import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUncheckedCreateWithoutProductInput>;
export declare const ProductBillingOptionUncheckedCreateWithoutProductInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    billingPeriod: z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>;
    price: z.ZodNumber;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionUncheckedCreateWithoutProductInput.schema.d.ts.map
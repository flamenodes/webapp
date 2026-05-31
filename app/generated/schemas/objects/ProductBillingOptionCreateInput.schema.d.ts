import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionCreateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCreateInput>;
export declare const ProductBillingOptionCreateInputObjectZodSchema: z.ZodObject<{
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
    product: z.ZodLazy<z.ZodType<Prisma.ProductCreateNestedOneWithoutBillingOptionsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCreateNestedOneWithoutBillingOptionsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionCreateInput.schema.d.ts.map
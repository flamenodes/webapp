import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigUpdatebillingPeriodsInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigUpdatebillingPeriodsInput>;
export declare const ProductCategoryConfigUpdatebillingPeriodsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>>;
    push: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>, z.ZodArray<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigUpdatebillingPeriodsInput.schema.d.ts.map
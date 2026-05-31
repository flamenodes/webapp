import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput>;
export declare const ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectZodSchema: z.ZodObject<{
    productId: z.ZodString;
    billingPeriod: z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput.schema.d.ts.map
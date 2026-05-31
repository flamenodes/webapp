import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigCreatebillingPeriodsInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigCreatebillingPeriodsInput>;
export declare const ProductCategoryConfigCreatebillingPeriodsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodArray<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigCreatebillingPeriodsInput.schema.d.ts.map
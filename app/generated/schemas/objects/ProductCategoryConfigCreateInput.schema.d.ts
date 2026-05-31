import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigCreateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigCreateInput>;
export declare const ProductCategoryConfigCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
    billingPeriods: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ProductCategoryConfigCreatebillingPeriodsInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductCategoryConfigCreatebillingPeriodsInput, unknown>>>, z.ZodArray<z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>>]>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigCreateInput.schema.d.ts.map
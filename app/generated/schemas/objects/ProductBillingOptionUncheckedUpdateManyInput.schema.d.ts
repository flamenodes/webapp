import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateManyInput>;
export declare const ProductBillingOptionUncheckedUpdateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    productId: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    billingPeriod: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        HOURLY: "HOURLY";
        DAILY: "DAILY";
        MONTHLY: "MONTHLY";
        QUARTERLY: "QUARTERLY";
        SEMIANNUALLY: "SEMIANNUALLY";
        YEARLY: "YEARLY";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumBillingPeriodFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumBillingPeriodFieldUpdateOperationsInput, unknown>>>]>>;
    price: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.IntFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.IntFieldUpdateOperationsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionUncheckedUpdateManyInput.schema.d.ts.map
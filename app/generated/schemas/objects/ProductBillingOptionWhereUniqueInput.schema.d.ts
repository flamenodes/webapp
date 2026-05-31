import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductBillingOptionWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput>;
export declare const ProductBillingOptionWhereUniqueInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    productId_billingPeriod: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductBillingOptionWhereUniqueInput.schema.d.ts.map
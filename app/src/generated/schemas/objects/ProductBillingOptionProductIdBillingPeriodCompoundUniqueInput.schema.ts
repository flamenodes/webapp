import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  productId: z.string(),
  billingPeriod: BillingPeriodSchema
}).strict();
export const ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput>;
export const ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectZodSchema = makeSchema();

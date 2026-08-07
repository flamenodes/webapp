import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema as ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema } from './ProductBillingOptionProductIdBillingPeriodCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productId_billingPeriod: z.lazy(() => ProductBillingOptionProductIdBillingPeriodCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionWhereUniqueInput>;
export const ProductBillingOptionWhereUniqueInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { EnumProductCategoryFieldUpdateOperationsInputObjectSchema as EnumProductCategoryFieldUpdateOperationsInputObjectSchema } from './EnumProductCategoryFieldUpdateOperationsInput.schema';
import { ProductCategoryConfigUpdatebillingPeriodsInputObjectSchema as ProductCategoryConfigUpdatebillingPeriodsInputObjectSchema } from './ProductCategoryConfigUpdatebillingPeriodsInput.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.union([ProductCategorySchema, z.lazy(() => EnumProductCategoryFieldUpdateOperationsInputObjectSchema)]).optional(),
  billingPeriods: z.union([z.lazy(() => ProductCategoryConfigUpdatebillingPeriodsInputObjectSchema), BillingPeriodSchema.array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProductCategoryConfigUpdateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigUpdateInput>;
export const ProductCategoryConfigUpdateInputObjectZodSchema = makeSchema();

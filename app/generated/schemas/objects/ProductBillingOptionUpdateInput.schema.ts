import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { EnumBillingPeriodFieldUpdateOperationsInputObjectSchema as EnumBillingPeriodFieldUpdateOperationsInputObjectSchema } from './EnumBillingPeriodFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutBillingOptionsNestedInputObjectSchema as ProductUpdateOneRequiredWithoutBillingOptionsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutBillingOptionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  billingPeriod: z.union([BillingPeriodSchema, z.lazy(() => EnumBillingPeriodFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  customDays: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutBillingOptionsNestedInputObjectSchema).optional()
}).strict();
export const ProductBillingOptionUpdateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUpdateInput>;
export const ProductBillingOptionUpdateInputObjectZodSchema = makeSchema();

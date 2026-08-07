import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema';
import { EnumBillingPeriodFieldUpdateOperationsInputObjectSchema as EnumBillingPeriodFieldUpdateOperationsInputObjectSchema } from './EnumBillingPeriodFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  billingPeriod: z.union([BillingPeriodSchema, z.lazy(() => EnumBillingPeriodFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  customDays: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ProductBillingOptionUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateManyInput>;
export const ProductBillingOptionUncheckedUpdateManyInputObjectZodSchema = makeSchema();

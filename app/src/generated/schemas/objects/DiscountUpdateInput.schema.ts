import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutDiscountNestedInputObjectSchema as ProductUpdateManyWithoutDiscountNestedInputObjectSchema } from './ProductUpdateManyWithoutDiscountNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  percentage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUpdateManyWithoutDiscountNestedInputObjectSchema).optional()
}).strict();
export const DiscountUpdateInputObjectSchema: z.ZodType<Prisma.DiscountUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountUpdateInput>;
export const DiscountUpdateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutDiscountNestedInputObjectSchema as ProductUncheckedUpdateManyWithoutDiscountNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutDiscountNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  percentage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUncheckedUpdateManyWithoutDiscountNestedInputObjectSchema).optional()
}).strict();
export const DiscountUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.DiscountUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountUncheckedUpdateInput>;
export const DiscountUncheckedUpdateInputObjectZodSchema = makeSchema();

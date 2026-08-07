import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProductFeatureUncheckedUpdateManyWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureUncheckedUpdateManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureUncheckedUpdateManyWithoutProductInput>;
export const ProductFeatureUncheckedUpdateManyWithoutProductInputObjectZodSchema = makeSchema();

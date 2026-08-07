import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema as ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutFeaturesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema).optional()
}).strict();
export const ProductFeatureUpdateInputObjectSchema: z.ZodType<Prisma.ProductFeatureUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureUpdateInput>;
export const ProductFeatureUpdateInputObjectZodSchema = makeSchema();

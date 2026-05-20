import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductCategorySchema } from '../enums/ProductCategory.schema'

const makeSchema = () => z.object({
  set: ProductCategorySchema.optional()
}).strict();
export const EnumProductCategoryFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumProductCategoryFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumProductCategoryFieldUpdateOperationsInput>;
export const EnumProductCategoryFieldUpdateOperationsInputObjectZodSchema = makeSchema();

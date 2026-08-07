import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductCategorySchema } from '../enums/ProductCategory.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  category: ProductCategorySchema.optional()
}).strict();
export const ProductCategoryConfigWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigWhereUniqueInput>;
export const ProductCategoryConfigWhereUniqueInputObjectZodSchema = makeSchema();

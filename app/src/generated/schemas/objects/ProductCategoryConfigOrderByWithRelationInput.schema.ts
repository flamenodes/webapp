import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  billingPeriods: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProductCategoryConfigOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigOrderByWithRelationInput>;
export const ProductCategoryConfigOrderByWithRelationInputObjectZodSchema = makeSchema();

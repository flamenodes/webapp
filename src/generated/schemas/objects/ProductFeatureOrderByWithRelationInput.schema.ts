import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProductFeatureOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureOrderByWithRelationInput>;
export const ProductFeatureOrderByWithRelationInputObjectZodSchema = makeSchema();

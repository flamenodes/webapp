import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  label: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ProductFeatureSelectObjectSchema: z.ZodType<Prisma.ProductFeatureSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureSelect>;
export const ProductFeatureSelectObjectZodSchema = makeSchema();

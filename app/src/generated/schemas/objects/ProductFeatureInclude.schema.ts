import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const ProductFeatureIncludeObjectSchema: z.ZodType<Prisma.ProductFeatureInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureInclude>;
export const ProductFeatureIncludeObjectZodSchema = makeSchema();

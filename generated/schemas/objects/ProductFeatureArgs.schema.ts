import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductFeatureSelectObjectSchema as ProductFeatureSelectObjectSchema } from './ProductFeatureSelect.schema';
import { ProductFeatureIncludeObjectSchema as ProductFeatureIncludeObjectSchema } from './ProductFeatureInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductFeatureSelectObjectSchema).optional(),
  include: z.lazy(() => ProductFeatureIncludeObjectSchema).optional()
}).strict();
export const ProductFeatureArgsObjectSchema = makeSchema();
export const ProductFeatureArgsObjectZodSchema = makeSchema();

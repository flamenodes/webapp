import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './ProductFeatureWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProductFeatureWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProductFeatureWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProductFeatureWhereInputObjectSchema).optional()
}).strict();
export const ProductFeatureListRelationFilterObjectSchema: z.ZodType<Prisma.ProductFeatureListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureListRelationFilter>;
export const ProductFeatureListRelationFilterObjectZodSchema = makeSchema();

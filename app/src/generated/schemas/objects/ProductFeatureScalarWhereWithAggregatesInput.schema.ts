import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const productfeaturescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductFeatureScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  sortOrder: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProductFeatureScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductFeatureScalarWhereWithAggregatesInput> = productfeaturescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductFeatureScalarWhereWithAggregatesInput>;
export const ProductFeatureScalarWhereWithAggregatesInputObjectZodSchema = productfeaturescalarwherewithaggregatesinputSchema;

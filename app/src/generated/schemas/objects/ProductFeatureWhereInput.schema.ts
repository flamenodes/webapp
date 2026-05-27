import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { ProductScalarRelationFilterObjectSchema as ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const productfeaturewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductFeatureWhereInputObjectSchema), z.lazy(() => ProductFeatureWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductFeatureWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductFeatureWhereInputObjectSchema), z.lazy(() => ProductFeatureWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sortOrder: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const ProductFeatureWhereInputObjectSchema: z.ZodType<Prisma.ProductFeatureWhereInput> = productfeaturewhereinputSchema as unknown as z.ZodType<Prisma.ProductFeatureWhereInput>;
export const ProductFeatureWhereInputObjectZodSchema = productfeaturewhereinputSchema;

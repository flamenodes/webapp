import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductCreatefeaturesInputObjectSchema as ProductCreatefeaturesInputObjectSchema } from './ProductCreatefeaturesInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  planName: z.string(),
  icon: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  category: ProductCategorySchema,
  price: z.number().int(),
  features: z.union([z.lazy(() => ProductCreatefeaturesInputObjectSchema), z.string().array()]).optional(),
  featureCategory: z.string().optional(),
  inStock: z.boolean().optional(),
  discountId: z.string().optional().nullable(),
  specs: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  deployMode: z.string().optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const ProductCreateManyInputObjectSchema: z.ZodType<Prisma.ProductCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyInput>;
export const ProductCreateManyInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductCreateNestedOneWithoutFeaturesInputObjectSchema as ProductCreateNestedOneWithoutFeaturesInputObjectSchema } from './ProductCreateNestedOneWithoutFeaturesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string(),
  sortOrder: z.number().int().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutFeaturesInputObjectSchema)
}).strict();
export const ProductFeatureCreateInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureCreateInput>;
export const ProductFeatureCreateInputObjectZodSchema = makeSchema();

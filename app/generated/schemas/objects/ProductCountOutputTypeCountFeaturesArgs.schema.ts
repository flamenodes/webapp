import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './ProductFeatureWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductFeatureWhereInputObjectSchema).optional()
}).strict();
export const ProductCountOutputTypeCountFeaturesArgsObjectSchema = makeSchema();
export const ProductCountOutputTypeCountFeaturesArgsObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductFeatureScalarWhereInputObjectSchema as ProductFeatureScalarWhereInputObjectSchema } from './ProductFeatureScalarWhereInput.schema';
import { ProductFeatureUpdateManyMutationInputObjectSchema as ProductFeatureUpdateManyMutationInputObjectSchema } from './ProductFeatureUpdateManyMutationInput.schema';
import { ProductFeatureUncheckedUpdateManyWithoutProductInputObjectSchema as ProductFeatureUncheckedUpdateManyWithoutProductInputObjectSchema } from './ProductFeatureUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductFeatureScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductFeatureUpdateManyMutationInputObjectSchema), z.lazy(() => ProductFeatureUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ProductFeatureUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureUpdateManyWithWhereWithoutProductInput>;
export const ProductFeatureUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();

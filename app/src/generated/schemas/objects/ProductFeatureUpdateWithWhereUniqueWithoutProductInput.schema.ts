import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureUpdateWithoutProductInputObjectSchema as ProductFeatureUpdateWithoutProductInputObjectSchema } from './ProductFeatureUpdateWithoutProductInput.schema';
import { ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema as ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema } from './ProductFeatureUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductFeatureUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureUpdateWithWhereUniqueWithoutProductInput>;
export const ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();

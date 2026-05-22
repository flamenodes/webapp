import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductUpdateWithoutFeaturesInputObjectSchema as ProductUpdateWithoutFeaturesInputObjectSchema } from './ProductUpdateWithoutFeaturesInput.schema';
import { ProductUncheckedUpdateWithoutFeaturesInputObjectSchema as ProductUncheckedUpdateWithoutFeaturesInputObjectSchema } from './ProductUncheckedUpdateWithoutFeaturesInput.schema';
import { ProductCreateWithoutFeaturesInputObjectSchema as ProductCreateWithoutFeaturesInputObjectSchema } from './ProductCreateWithoutFeaturesInput.schema';
import { ProductUncheckedCreateWithoutFeaturesInputObjectSchema as ProductUncheckedCreateWithoutFeaturesInputObjectSchema } from './ProductUncheckedCreateWithoutFeaturesInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutFeaturesInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutFeaturesInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutFeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutFeaturesInput>;
export const ProductUpsertWithoutFeaturesInputObjectZodSchema = makeSchema();

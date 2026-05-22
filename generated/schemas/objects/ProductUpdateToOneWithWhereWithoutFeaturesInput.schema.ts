import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutFeaturesInputObjectSchema as ProductUpdateWithoutFeaturesInputObjectSchema } from './ProductUpdateWithoutFeaturesInput.schema';
import { ProductUncheckedUpdateWithoutFeaturesInputObjectSchema as ProductUncheckedUpdateWithoutFeaturesInputObjectSchema } from './ProductUncheckedUpdateWithoutFeaturesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutFeaturesInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutFeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutFeaturesInput>;
export const ProductUpdateToOneWithWhereWithoutFeaturesInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductCreateWithoutFeaturesInputObjectSchema as ProductCreateWithoutFeaturesInputObjectSchema } from './ProductCreateWithoutFeaturesInput.schema';
import { ProductUncheckedCreateWithoutFeaturesInputObjectSchema as ProductUncheckedCreateWithoutFeaturesInputObjectSchema } from './ProductUncheckedCreateWithoutFeaturesInput.schema';
import { ProductCreateOrConnectWithoutFeaturesInputObjectSchema as ProductCreateOrConnectWithoutFeaturesInputObjectSchema } from './ProductCreateOrConnectWithoutFeaturesInput.schema';
import { ProductUpsertWithoutFeaturesInputObjectSchema as ProductUpsertWithoutFeaturesInputObjectSchema } from './ProductUpsertWithoutFeaturesInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutFeaturesInputObjectSchema as ProductUpdateToOneWithWhereWithoutFeaturesInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutFeaturesInput.schema';
import { ProductUpdateWithoutFeaturesInputObjectSchema as ProductUpdateWithoutFeaturesInputObjectSchema } from './ProductUpdateWithoutFeaturesInput.schema';
import { ProductUncheckedUpdateWithoutFeaturesInputObjectSchema as ProductUncheckedUpdateWithoutFeaturesInputObjectSchema } from './ProductUncheckedUpdateWithoutFeaturesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutFeaturesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutFeaturesInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutFeaturesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUpdateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutFeaturesInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutFeaturesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutFeaturesNestedInput>;
export const ProductUpdateOneRequiredWithoutFeaturesNestedInputObjectZodSchema = makeSchema();

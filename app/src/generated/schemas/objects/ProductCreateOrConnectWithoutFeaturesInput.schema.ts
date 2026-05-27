import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutFeaturesInputObjectSchema as ProductCreateWithoutFeaturesInputObjectSchema } from './ProductCreateWithoutFeaturesInput.schema';
import { ProductUncheckedCreateWithoutFeaturesInputObjectSchema as ProductUncheckedCreateWithoutFeaturesInputObjectSchema } from './ProductUncheckedCreateWithoutFeaturesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutFeaturesInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutFeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutFeaturesInput>;
export const ProductCreateOrConnectWithoutFeaturesInputObjectZodSchema = makeSchema();

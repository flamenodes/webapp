import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductCreateWithoutFeaturesInputObjectSchema as ProductCreateWithoutFeaturesInputObjectSchema } from './ProductCreateWithoutFeaturesInput.schema';
import { ProductUncheckedCreateWithoutFeaturesInputObjectSchema as ProductUncheckedCreateWithoutFeaturesInputObjectSchema } from './ProductUncheckedCreateWithoutFeaturesInput.schema';
import { ProductCreateOrConnectWithoutFeaturesInputObjectSchema as ProductCreateOrConnectWithoutFeaturesInputObjectSchema } from './ProductCreateOrConnectWithoutFeaturesInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutFeaturesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutFeaturesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutFeaturesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutFeaturesInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutFeaturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutFeaturesInput>;
export const ProductCreateNestedOneWithoutFeaturesInputObjectZodSchema = makeSchema();

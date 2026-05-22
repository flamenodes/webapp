import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductFeatureCreateWithoutProductInputObjectSchema as ProductFeatureCreateWithoutProductInputObjectSchema } from './ProductFeatureCreateWithoutProductInput.schema';
import { ProductFeatureUncheckedCreateWithoutProductInputObjectSchema as ProductFeatureUncheckedCreateWithoutProductInputObjectSchema } from './ProductFeatureUncheckedCreateWithoutProductInput.schema';
import { ProductFeatureCreateOrConnectWithoutProductInputObjectSchema as ProductFeatureCreateOrConnectWithoutProductInputObjectSchema } from './ProductFeatureCreateOrConnectWithoutProductInput.schema';
import { ProductFeatureUpsertWithWhereUniqueWithoutProductInputObjectSchema as ProductFeatureUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductFeatureUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductFeatureCreateManyProductInputEnvelopeObjectSchema as ProductFeatureCreateManyProductInputEnvelopeObjectSchema } from './ProductFeatureCreateManyProductInputEnvelope.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectSchema as ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductFeatureUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductFeatureUpdateManyWithWhereWithoutProductInputObjectSchema as ProductFeatureUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductFeatureUpdateManyWithWhereWithoutProductInput.schema';
import { ProductFeatureScalarWhereInputObjectSchema as ProductFeatureScalarWhereInputObjectSchema } from './ProductFeatureScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductFeatureCreateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ProductFeatureUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductFeatureCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductFeatureUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductFeatureCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema), z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema), z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema), z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema), z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductFeatureUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductFeatureScalarWhereInputObjectSchema), z.lazy(() => ProductFeatureScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductFeatureUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.ProductFeatureUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureUpdateManyWithoutProductNestedInput>;
export const ProductFeatureUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();

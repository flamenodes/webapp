import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureCreateWithoutProductInputObjectSchema as ProductFeatureCreateWithoutProductInputObjectSchema } from './ProductFeatureCreateWithoutProductInput.schema';
import { ProductFeatureUncheckedCreateWithoutProductInputObjectSchema as ProductFeatureUncheckedCreateWithoutProductInputObjectSchema } from './ProductFeatureUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductFeatureWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductFeatureCreateWithoutProductInputObjectSchema), z.lazy(() => ProductFeatureUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductFeatureCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductFeatureCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureCreateOrConnectWithoutProductInput>;
export const ProductFeatureCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();

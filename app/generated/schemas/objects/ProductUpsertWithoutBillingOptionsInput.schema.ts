import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductUpdateWithoutBillingOptionsInputObjectSchema as ProductUpdateWithoutBillingOptionsInputObjectSchema } from './ProductUpdateWithoutBillingOptionsInput.schema';
import { ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema as ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedUpdateWithoutBillingOptionsInput.schema';
import { ProductCreateWithoutBillingOptionsInputObjectSchema as ProductCreateWithoutBillingOptionsInputObjectSchema } from './ProductCreateWithoutBillingOptionsInput.schema';
import { ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema as ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedCreateWithoutBillingOptionsInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutBillingOptionsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutBillingOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutBillingOptionsInput>;
export const ProductUpsertWithoutBillingOptionsInputObjectZodSchema = makeSchema();

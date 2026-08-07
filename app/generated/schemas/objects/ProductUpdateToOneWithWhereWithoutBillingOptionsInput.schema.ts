import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutBillingOptionsInputObjectSchema as ProductUpdateWithoutBillingOptionsInputObjectSchema } from './ProductUpdateWithoutBillingOptionsInput.schema';
import { ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema as ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedUpdateWithoutBillingOptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutBillingOptionsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutBillingOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutBillingOptionsInput>;
export const ProductUpdateToOneWithWhereWithoutBillingOptionsInputObjectZodSchema = makeSchema();

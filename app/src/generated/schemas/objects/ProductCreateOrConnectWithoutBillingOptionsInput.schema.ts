import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutBillingOptionsInputObjectSchema as ProductCreateWithoutBillingOptionsInputObjectSchema } from './ProductCreateWithoutBillingOptionsInput.schema';
import { ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema as ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedCreateWithoutBillingOptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBillingOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutBillingOptionsInput>;
export const ProductCreateOrConnectWithoutBillingOptionsInputObjectZodSchema = makeSchema();

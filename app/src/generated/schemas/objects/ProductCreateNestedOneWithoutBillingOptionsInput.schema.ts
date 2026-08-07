import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductCreateWithoutBillingOptionsInputObjectSchema as ProductCreateWithoutBillingOptionsInputObjectSchema } from './ProductCreateWithoutBillingOptionsInput.schema';
import { ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema as ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema } from './ProductUncheckedCreateWithoutBillingOptionsInput.schema';
import { ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema as ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema } from './ProductCreateOrConnectWithoutBillingOptionsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutBillingOptionsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutBillingOptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutBillingOptionsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutBillingOptionsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutBillingOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutBillingOptionsInput>;
export const ProductCreateNestedOneWithoutBillingOptionsInputObjectZodSchema = makeSchema();

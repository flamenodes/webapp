import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutDiscountInputObjectSchema as ProductCreateWithoutDiscountInputObjectSchema } from './ProductCreateWithoutDiscountInput.schema';
import { ProductUncheckedCreateWithoutDiscountInputObjectSchema as ProductUncheckedCreateWithoutDiscountInputObjectSchema } from './ProductUncheckedCreateWithoutDiscountInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutDiscountInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDiscountInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutDiscountInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutDiscountInput>;
export const ProductCreateOrConnectWithoutDiscountInputObjectZodSchema = makeSchema();

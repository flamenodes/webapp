import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutDiscountInputObjectSchema as ProductUpdateWithoutDiscountInputObjectSchema } from './ProductUpdateWithoutDiscountInput.schema';
import { ProductUncheckedUpdateWithoutDiscountInputObjectSchema as ProductUncheckedUpdateWithoutDiscountInputObjectSchema } from './ProductUncheckedUpdateWithoutDiscountInput.schema';
import { ProductCreateWithoutDiscountInputObjectSchema as ProductCreateWithoutDiscountInputObjectSchema } from './ProductCreateWithoutDiscountInput.schema';
import { ProductUncheckedCreateWithoutDiscountInputObjectSchema as ProductUncheckedCreateWithoutDiscountInputObjectSchema } from './ProductUncheckedCreateWithoutDiscountInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductUpdateWithoutDiscountInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutDiscountInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutDiscountInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDiscountInputObjectSchema)])
}).strict();
export const ProductUpsertWithWhereUniqueWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutDiscountInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutDiscountInput>;
export const ProductUpsertWithWhereUniqueWithoutDiscountInputObjectZodSchema = makeSchema();

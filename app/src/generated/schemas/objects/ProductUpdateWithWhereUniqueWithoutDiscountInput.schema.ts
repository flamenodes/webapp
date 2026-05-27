import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutDiscountInputObjectSchema as ProductUpdateWithoutDiscountInputObjectSchema } from './ProductUpdateWithoutDiscountInput.schema';
import { ProductUncheckedUpdateWithoutDiscountInputObjectSchema as ProductUncheckedUpdateWithoutDiscountInputObjectSchema } from './ProductUncheckedUpdateWithoutDiscountInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductUpdateWithoutDiscountInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutDiscountInputObjectSchema)])
}).strict();
export const ProductUpdateWithWhereUniqueWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutDiscountInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutDiscountInput>;
export const ProductUpdateWithWhereUniqueWithoutDiscountInputObjectZodSchema = makeSchema();

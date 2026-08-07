import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema as ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutDiscountInputObjectSchema as ProductUncheckedUpdateManyWithoutDiscountInputObjectSchema } from './ProductUncheckedUpdateManyWithoutDiscountInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductUpdateManyMutationInputObjectSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutDiscountInputObjectSchema)])
}).strict();
export const ProductUpdateManyWithWhereWithoutDiscountInputObjectSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutDiscountInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutDiscountInput>;
export const ProductUpdateManyWithWhereWithoutDiscountInputObjectZodSchema = makeSchema();

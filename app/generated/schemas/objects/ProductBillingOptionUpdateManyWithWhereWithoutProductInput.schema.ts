import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ProductBillingOptionScalarWhereInputObjectSchema as ProductBillingOptionScalarWhereInputObjectSchema } from './ProductBillingOptionScalarWhereInput.schema';
import { ProductBillingOptionUpdateManyMutationInputObjectSchema as ProductBillingOptionUpdateManyMutationInputObjectSchema } from './ProductBillingOptionUpdateManyMutationInput.schema';
import { ProductBillingOptionUncheckedUpdateManyWithoutProductInputObjectSchema as ProductBillingOptionUncheckedUpdateManyWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductBillingOptionUpdateManyMutationInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUpdateManyWithWhereWithoutProductInput>;
export const ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionUpdateWithoutProductInputObjectSchema as ProductBillingOptionUpdateWithoutProductInputObjectSchema } from './ProductBillingOptionUpdateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductBillingOptionUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const ProductBillingOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUpdateWithWhereUniqueWithoutProductInput>;
export const ProductBillingOptionUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();

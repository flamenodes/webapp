import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionUpdateWithoutProductInputObjectSchema as ProductBillingOptionUpdateWithoutProductInputObjectSchema } from './ProductBillingOptionUpdateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedUpdateWithoutProductInput.schema';
import { ProductBillingOptionCreateWithoutProductInputObjectSchema as ProductBillingOptionCreateWithoutProductInputObjectSchema } from './ProductBillingOptionCreateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductBillingOptionUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductBillingOptionCreateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUpsertWithWhereUniqueWithoutProductInput>;
export const ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();

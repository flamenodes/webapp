import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionCreateWithoutProductInputObjectSchema as ProductBillingOptionCreateWithoutProductInputObjectSchema } from './ProductBillingOptionCreateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductBillingOptionCreateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionCreateOrConnectWithoutProductInput>;
export const ProductBillingOptionCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();

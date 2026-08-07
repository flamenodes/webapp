import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ProductBillingOptionCreateWithoutProductInputObjectSchema as ProductBillingOptionCreateWithoutProductInputObjectSchema } from './ProductBillingOptionCreateWithoutProductInput.schema';
import { ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema as ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema } from './ProductBillingOptionUncheckedCreateWithoutProductInput.schema';
import { ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema as ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema } from './ProductBillingOptionCreateOrConnectWithoutProductInput.schema';
import { ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema as ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductBillingOptionUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema as ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema } from './ProductBillingOptionCreateManyProductInputEnvelope.schema';
import { ProductBillingOptionWhereUniqueInputObjectSchema as ProductBillingOptionWhereUniqueInputObjectSchema } from './ProductBillingOptionWhereUniqueInput.schema';
import { ProductBillingOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema as ProductBillingOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductBillingOptionUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectSchema as ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductBillingOptionUpdateManyWithWhereWithoutProductInput.schema';
import { ProductBillingOptionScalarWhereInputObjectSchema as ProductBillingOptionScalarWhereInputObjectSchema } from './ProductBillingOptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductBillingOptionCreateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductBillingOptionCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema), z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema), z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema), z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema), z.lazy(() => ProductBillingOptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductBillingOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => ProductBillingOptionUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema), z.lazy(() => ProductBillingOptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductBillingOptionUncheckedUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionUncheckedUpdateManyWithoutProductNestedInput>;
export const ProductBillingOptionUncheckedUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();

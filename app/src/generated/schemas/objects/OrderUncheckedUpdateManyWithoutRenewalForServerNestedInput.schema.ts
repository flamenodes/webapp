import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderCreateWithoutRenewalForServerInputObjectSchema as OrderCreateWithoutRenewalForServerInputObjectSchema } from './OrderCreateWithoutRenewalForServerInput.schema';
import { OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema as OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedCreateWithoutRenewalForServerInput.schema';
import { OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema as OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema } from './OrderCreateOrConnectWithoutRenewalForServerInput.schema';
import { OrderUpsertWithWhereUniqueWithoutRenewalForServerInputObjectSchema as OrderUpsertWithWhereUniqueWithoutRenewalForServerInputObjectSchema } from './OrderUpsertWithWhereUniqueWithoutRenewalForServerInput.schema';
import { OrderCreateManyRenewalForServerInputEnvelopeObjectSchema as OrderCreateManyRenewalForServerInputEnvelopeObjectSchema } from './OrderCreateManyRenewalForServerInputEnvelope.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithWhereUniqueWithoutRenewalForServerInputObjectSchema as OrderUpdateWithWhereUniqueWithoutRenewalForServerInputObjectSchema } from './OrderUpdateWithWhereUniqueWithoutRenewalForServerInput.schema';
import { OrderUpdateManyWithWhereWithoutRenewalForServerInputObjectSchema as OrderUpdateManyWithWhereWithoutRenewalForServerInputObjectSchema } from './OrderUpdateManyWithWhereWithoutRenewalForServerInput.schema';
import { OrderScalarWhereInputObjectSchema as OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderCreateWithoutRenewalForServerInputObjectSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderUpsertWithWhereUniqueWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUpsertWithWhereUniqueWithoutRenewalForServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyRenewalForServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderUpdateWithWhereUniqueWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUpdateWithWhereUniqueWithoutRenewalForServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderUpdateManyWithWhereWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUpdateManyWithWhereWithoutRenewalForServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderScalarWhereInputObjectSchema), z.lazy(() => OrderScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrderUncheckedUpdateManyWithoutRenewalForServerNestedInputObjectSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutRenewalForServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutRenewalForServerNestedInput>;
export const OrderUncheckedUpdateManyWithoutRenewalForServerNestedInputObjectZodSchema = makeSchema();

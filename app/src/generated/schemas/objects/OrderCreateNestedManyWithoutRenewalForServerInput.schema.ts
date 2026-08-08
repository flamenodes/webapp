import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderCreateWithoutRenewalForServerInputObjectSchema as OrderCreateWithoutRenewalForServerInputObjectSchema } from './OrderCreateWithoutRenewalForServerInput.schema';
import { OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema as OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedCreateWithoutRenewalForServerInput.schema';
import { OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema as OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema } from './OrderCreateOrConnectWithoutRenewalForServerInput.schema';
import { OrderCreateManyRenewalForServerInputEnvelopeObjectSchema as OrderCreateManyRenewalForServerInputEnvelopeObjectSchema } from './OrderCreateManyRenewalForServerInputEnvelope.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderCreateWithoutRenewalForServerInputObjectSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyRenewalForServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrderCreateNestedManyWithoutRenewalForServerInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutRenewalForServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateNestedManyWithoutRenewalForServerInput>;
export const OrderCreateNestedManyWithoutRenewalForServerInputObjectZodSchema = makeSchema();

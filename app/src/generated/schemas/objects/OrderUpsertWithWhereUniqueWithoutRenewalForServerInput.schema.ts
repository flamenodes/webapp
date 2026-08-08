import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutRenewalForServerInputObjectSchema as OrderUpdateWithoutRenewalForServerInputObjectSchema } from './OrderUpdateWithoutRenewalForServerInput.schema';
import { OrderUncheckedUpdateWithoutRenewalForServerInputObjectSchema as OrderUncheckedUpdateWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedUpdateWithoutRenewalForServerInput.schema';
import { OrderCreateWithoutRenewalForServerInputObjectSchema as OrderCreateWithoutRenewalForServerInputObjectSchema } from './OrderCreateWithoutRenewalForServerInput.schema';
import { OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema as OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedCreateWithoutRenewalForServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrderUpdateWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutRenewalForServerInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderCreateWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema)])
}).strict();
export const OrderUpsertWithWhereUniqueWithoutRenewalForServerInputObjectSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutRenewalForServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutRenewalForServerInput>;
export const OrderUpsertWithWhereUniqueWithoutRenewalForServerInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutRenewalForServerInputObjectSchema as OrderCreateWithoutRenewalForServerInputObjectSchema } from './OrderCreateWithoutRenewalForServerInput.schema';
import { OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema as OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedCreateWithoutRenewalForServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderCreateWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutRenewalForServerInputObjectSchema)])
}).strict();
export const OrderCreateOrConnectWithoutRenewalForServerInputObjectSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutRenewalForServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateOrConnectWithoutRenewalForServerInput>;
export const OrderCreateOrConnectWithoutRenewalForServerInputObjectZodSchema = makeSchema();

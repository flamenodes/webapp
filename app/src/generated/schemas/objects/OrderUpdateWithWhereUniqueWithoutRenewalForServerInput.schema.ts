import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutRenewalForServerInputObjectSchema as OrderUpdateWithoutRenewalForServerInputObjectSchema } from './OrderUpdateWithoutRenewalForServerInput.schema';
import { OrderUncheckedUpdateWithoutRenewalForServerInputObjectSchema as OrderUncheckedUpdateWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedUpdateWithoutRenewalForServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrderUpdateWithoutRenewalForServerInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutRenewalForServerInputObjectSchema)])
}).strict();
export const OrderUpdateWithWhereUniqueWithoutRenewalForServerInputObjectSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutRenewalForServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutRenewalForServerInput>;
export const OrderUpdateWithWhereUniqueWithoutRenewalForServerInputObjectZodSchema = makeSchema();

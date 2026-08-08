import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderScalarWhereInputObjectSchema as OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';
import { OrderUpdateManyMutationInputObjectSchema as OrderUpdateManyMutationInputObjectSchema } from './OrderUpdateManyMutationInput.schema';
import { OrderUncheckedUpdateManyWithoutRenewalForServerInputObjectSchema as OrderUncheckedUpdateManyWithoutRenewalForServerInputObjectSchema } from './OrderUncheckedUpdateManyWithoutRenewalForServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrderUpdateManyMutationInputObjectSchema), z.lazy(() => OrderUncheckedUpdateManyWithoutRenewalForServerInputObjectSchema)])
}).strict();
export const OrderUpdateManyWithWhereWithoutRenewalForServerInputObjectSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutRenewalForServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutRenewalForServerInput>;
export const OrderUpdateManyWithWhereWithoutRenewalForServerInputObjectZodSchema = makeSchema();

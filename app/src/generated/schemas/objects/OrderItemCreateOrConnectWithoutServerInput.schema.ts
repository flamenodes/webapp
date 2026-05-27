import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutServerInputObjectSchema as OrderItemCreateWithoutServerInputObjectSchema } from './OrderItemCreateWithoutServerInput.schema';
import { OrderItemUncheckedCreateWithoutServerInputObjectSchema as OrderItemUncheckedCreateWithoutServerInputObjectSchema } from './OrderItemUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderItemCreateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const OrderItemCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateOrConnectWithoutServerInput>;
export const OrderItemCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();

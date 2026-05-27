import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { OrderItemCreateWithoutServerInputObjectSchema as OrderItemCreateWithoutServerInputObjectSchema } from './OrderItemCreateWithoutServerInput.schema';
import { OrderItemUncheckedCreateWithoutServerInputObjectSchema as OrderItemUncheckedCreateWithoutServerInputObjectSchema } from './OrderItemUncheckedCreateWithoutServerInput.schema';
import { OrderItemCreateOrConnectWithoutServerInputObjectSchema as OrderItemCreateOrConnectWithoutServerInputObjectSchema } from './OrderItemCreateOrConnectWithoutServerInput.schema';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutServerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutServerInputObjectSchema).optional(),
  connect: z.lazy(() => OrderItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrderItemCreateNestedOneWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemCreateNestedOneWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateNestedOneWithoutServerInput>;
export const OrderItemCreateNestedOneWithoutServerInputObjectZodSchema = makeSchema();

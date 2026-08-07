import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { OrderItemCreateWithoutServerInputObjectSchema as OrderItemCreateWithoutServerInputObjectSchema } from './OrderItemCreateWithoutServerInput.schema';
import { OrderItemUncheckedCreateWithoutServerInputObjectSchema as OrderItemUncheckedCreateWithoutServerInputObjectSchema } from './OrderItemUncheckedCreateWithoutServerInput.schema';
import { OrderItemCreateOrConnectWithoutServerInputObjectSchema as OrderItemCreateOrConnectWithoutServerInputObjectSchema } from './OrderItemCreateOrConnectWithoutServerInput.schema';
import { OrderItemUpsertWithoutServerInputObjectSchema as OrderItemUpsertWithoutServerInputObjectSchema } from './OrderItemUpsertWithoutServerInput.schema';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateToOneWithWhereWithoutServerInputObjectSchema as OrderItemUpdateToOneWithWhereWithoutServerInputObjectSchema } from './OrderItemUpdateToOneWithWhereWithoutServerInput.schema';
import { OrderItemUpdateWithoutServerInputObjectSchema as OrderItemUpdateWithoutServerInputObjectSchema } from './OrderItemUpdateWithoutServerInput.schema';
import { OrderItemUncheckedUpdateWithoutServerInputObjectSchema as OrderItemUncheckedUpdateWithoutServerInputObjectSchema } from './OrderItemUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutServerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutServerInputObjectSchema).optional(),
  upsert: z.lazy(() => OrderItemUpsertWithoutServerInputObjectSchema).optional(),
  connect: z.lazy(() => OrderItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrderItemUpdateToOneWithWhereWithoutServerInputObjectSchema), z.lazy(() => OrderItemUpdateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutServerInputObjectSchema)]).optional()
}).strict();
export const OrderItemUpdateOneRequiredWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateOneRequiredWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateOneRequiredWithoutServerNestedInput>;
export const OrderItemUpdateOneRequiredWithoutServerNestedInputObjectZodSchema = makeSchema();

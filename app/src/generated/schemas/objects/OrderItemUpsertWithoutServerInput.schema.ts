import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { OrderItemUpdateWithoutServerInputObjectSchema as OrderItemUpdateWithoutServerInputObjectSchema } from './OrderItemUpdateWithoutServerInput.schema';
import { OrderItemUncheckedUpdateWithoutServerInputObjectSchema as OrderItemUncheckedUpdateWithoutServerInputObjectSchema } from './OrderItemUncheckedUpdateWithoutServerInput.schema';
import { OrderItemCreateWithoutServerInputObjectSchema as OrderItemCreateWithoutServerInputObjectSchema } from './OrderItemCreateWithoutServerInput.schema';
import { OrderItemUncheckedCreateWithoutServerInputObjectSchema as OrderItemUncheckedCreateWithoutServerInputObjectSchema } from './OrderItemUncheckedCreateWithoutServerInput.schema';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './OrderItemWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrderItemUpdateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderItemCreateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutServerInputObjectSchema)]),
  where: z.lazy(() => OrderItemWhereInputObjectSchema).optional()
}).strict();
export const OrderItemUpsertWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemUpsertWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpsertWithoutServerInput>;
export const OrderItemUpsertWithoutServerInputObjectZodSchema = makeSchema();

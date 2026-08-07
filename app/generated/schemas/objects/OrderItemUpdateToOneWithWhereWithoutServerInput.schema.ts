import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './OrderItemWhereInput.schema';
import { OrderItemUpdateWithoutServerInputObjectSchema as OrderItemUpdateWithoutServerInputObjectSchema } from './OrderItemUpdateWithoutServerInput.schema';
import { OrderItemUncheckedUpdateWithoutServerInputObjectSchema as OrderItemUncheckedUpdateWithoutServerInputObjectSchema } from './OrderItemUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrderItemUpdateWithoutServerInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const OrderItemUpdateToOneWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateToOneWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateToOneWithWhereWithoutServerInput>;
export const OrderItemUpdateToOneWithWhereWithoutServerInputObjectZodSchema = makeSchema();

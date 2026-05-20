import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerUpdateWithoutOrderItemInputObjectSchema as ServerUpdateWithoutOrderItemInputObjectSchema } from './ServerUpdateWithoutOrderItemInput.schema';
import { ServerUncheckedUpdateWithoutOrderItemInputObjectSchema as ServerUncheckedUpdateWithoutOrderItemInputObjectSchema } from './ServerUncheckedUpdateWithoutOrderItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServerUpdateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutOrderItemInputObjectSchema)])
}).strict();
export const ServerUpdateToOneWithWhereWithoutOrderItemInputObjectSchema: z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutOrderItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutOrderItemInput>;
export const ServerUpdateToOneWithWhereWithoutOrderItemInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ServerUpdateWithoutOrderItemInputObjectSchema as ServerUpdateWithoutOrderItemInputObjectSchema } from './ServerUpdateWithoutOrderItemInput.schema';
import { ServerUncheckedUpdateWithoutOrderItemInputObjectSchema as ServerUncheckedUpdateWithoutOrderItemInputObjectSchema } from './ServerUncheckedUpdateWithoutOrderItemInput.schema';
import { ServerCreateWithoutOrderItemInputObjectSchema as ServerCreateWithoutOrderItemInputObjectSchema } from './ServerCreateWithoutOrderItemInput.schema';
import { ServerUncheckedCreateWithoutOrderItemInputObjectSchema as ServerUncheckedCreateWithoutOrderItemInputObjectSchema } from './ServerUncheckedCreateWithoutOrderItemInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServerUpdateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutOrderItemInputObjectSchema)]),
  create: z.union([z.lazy(() => ServerCreateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutOrderItemInputObjectSchema)]),
  where: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerUpsertWithoutOrderItemInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithoutOrderItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpsertWithoutOrderItemInput>;
export const ServerUpsertWithoutOrderItemInputObjectZodSchema = makeSchema();

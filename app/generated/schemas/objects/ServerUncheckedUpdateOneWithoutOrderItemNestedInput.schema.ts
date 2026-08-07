import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ServerCreateWithoutOrderItemInputObjectSchema as ServerCreateWithoutOrderItemInputObjectSchema } from './ServerCreateWithoutOrderItemInput.schema';
import { ServerUncheckedCreateWithoutOrderItemInputObjectSchema as ServerUncheckedCreateWithoutOrderItemInputObjectSchema } from './ServerUncheckedCreateWithoutOrderItemInput.schema';
import { ServerCreateOrConnectWithoutOrderItemInputObjectSchema as ServerCreateOrConnectWithoutOrderItemInputObjectSchema } from './ServerCreateOrConnectWithoutOrderItemInput.schema';
import { ServerUpsertWithoutOrderItemInputObjectSchema as ServerUpsertWithoutOrderItemInputObjectSchema } from './ServerUpsertWithoutOrderItemInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateToOneWithWhereWithoutOrderItemInputObjectSchema as ServerUpdateToOneWithWhereWithoutOrderItemInputObjectSchema } from './ServerUpdateToOneWithWhereWithoutOrderItemInput.schema';
import { ServerUpdateWithoutOrderItemInputObjectSchema as ServerUpdateWithoutOrderItemInputObjectSchema } from './ServerUpdateWithoutOrderItemInput.schema';
import { ServerUncheckedUpdateWithoutOrderItemInputObjectSchema as ServerUncheckedUpdateWithoutOrderItemInputObjectSchema } from './ServerUncheckedUpdateWithoutOrderItemInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutOrderItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutOrderItemInputObjectSchema).optional(),
  upsert: z.lazy(() => ServerUpsertWithoutOrderItemInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ServerWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ServerWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServerUpdateToOneWithWhereWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUpdateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutOrderItemInputObjectSchema)]).optional()
}).strict();
export const ServerUncheckedUpdateOneWithoutOrderItemNestedInputObjectSchema: z.ZodType<Prisma.ServerUncheckedUpdateOneWithoutOrderItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedUpdateOneWithoutOrderItemNestedInput>;
export const ServerUncheckedUpdateOneWithoutOrderItemNestedInputObjectZodSchema = makeSchema();

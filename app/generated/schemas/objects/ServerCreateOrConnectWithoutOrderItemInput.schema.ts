import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutOrderItemInputObjectSchema as ServerCreateWithoutOrderItemInputObjectSchema } from './ServerCreateWithoutOrderItemInput.schema';
import { ServerUncheckedCreateWithoutOrderItemInputObjectSchema as ServerUncheckedCreateWithoutOrderItemInputObjectSchema } from './ServerUncheckedCreateWithoutOrderItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServerCreateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutOrderItemInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutOrderItemInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutOrderItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateOrConnectWithoutOrderItemInput>;
export const ServerCreateOrConnectWithoutOrderItemInputObjectZodSchema = makeSchema();

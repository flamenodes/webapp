import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ServerCreateWithoutUserInputObjectSchema as ServerCreateWithoutUserInputObjectSchema } from './ServerCreateWithoutUserInput.schema';
import { ServerUncheckedCreateWithoutUserInputObjectSchema as ServerUncheckedCreateWithoutUserInputObjectSchema } from './ServerUncheckedCreateWithoutUserInput.schema';
import { ServerCreateOrConnectWithoutUserInputObjectSchema as ServerCreateOrConnectWithoutUserInputObjectSchema } from './ServerCreateOrConnectWithoutUserInput.schema';
import { ServerUpsertWithWhereUniqueWithoutUserInputObjectSchema as ServerUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ServerUpsertWithWhereUniqueWithoutUserInput.schema';
import { ServerCreateManyUserInputEnvelopeObjectSchema as ServerCreateManyUserInputEnvelopeObjectSchema } from './ServerCreateManyUserInputEnvelope.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithWhereUniqueWithoutUserInputObjectSchema as ServerUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ServerUpdateWithWhereUniqueWithoutUserInput.schema';
import { ServerUpdateManyWithWhereWithoutUserInputObjectSchema as ServerUpdateManyWithWhereWithoutUserInputObjectSchema } from './ServerUpdateManyWithWhereWithoutUserInput.schema';
import { ServerScalarWhereInputObjectSchema as ServerScalarWhereInputObjectSchema } from './ServerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutUserInputObjectSchema), z.lazy(() => ServerCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ServerUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServerCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ServerCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ServerUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ServerUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServerCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ServerUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ServerUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ServerUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ServerUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ServerScalarWhereInputObjectSchema), z.lazy(() => ServerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ServerUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ServerUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateManyWithoutUserNestedInput>;
export const ServerUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();

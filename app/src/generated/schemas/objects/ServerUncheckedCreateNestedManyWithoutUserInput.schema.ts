import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ServerCreateWithoutUserInputObjectSchema as ServerCreateWithoutUserInputObjectSchema } from './ServerCreateWithoutUserInput.schema';
import { ServerUncheckedCreateWithoutUserInputObjectSchema as ServerUncheckedCreateWithoutUserInputObjectSchema } from './ServerUncheckedCreateWithoutUserInput.schema';
import { ServerCreateOrConnectWithoutUserInputObjectSchema as ServerCreateOrConnectWithoutUserInputObjectSchema } from './ServerCreateOrConnectWithoutUserInput.schema';
import { ServerCreateManyUserInputEnvelopeObjectSchema as ServerCreateManyUserInputEnvelopeObjectSchema } from './ServerCreateManyUserInputEnvelope.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutUserInputObjectSchema), z.lazy(() => ServerCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ServerUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServerCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ServerCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServerCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ServerUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateNestedManyWithoutUserInput>;
export const ServerUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();

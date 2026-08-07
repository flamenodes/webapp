import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketMessageCreateWithoutSenderInputObjectSchema as TicketMessageCreateWithoutSenderInputObjectSchema } from './TicketMessageCreateWithoutSenderInput.schema';
import { TicketMessageUncheckedCreateWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateWithoutSenderInput.schema';
import { TicketMessageCreateOrConnectWithoutSenderInputObjectSchema as TicketMessageCreateOrConnectWithoutSenderInputObjectSchema } from './TicketMessageCreateOrConnectWithoutSenderInput.schema';
import { TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema as TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema } from './TicketMessageUpsertWithWhereUniqueWithoutSenderInput.schema';
import { TicketMessageCreateManySenderInputEnvelopeObjectSchema as TicketMessageCreateManySenderInputEnvelopeObjectSchema } from './TicketMessageCreateManySenderInputEnvelope.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema as TicketMessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema } from './TicketMessageUpdateWithWhereUniqueWithoutSenderInput.schema';
import { TicketMessageUpdateManyWithWhereWithoutSenderInputObjectSchema as TicketMessageUpdateManyWithWhereWithoutSenderInputObjectSchema } from './TicketMessageUpdateManyWithWhereWithoutSenderInput.schema';
import { TicketMessageScalarWhereInputObjectSchema as TicketMessageScalarWhereInputObjectSchema } from './TicketMessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketMessageCreateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageCreateWithoutSenderInputObjectSchema).array(), z.lazy(() => TicketMessageUncheckedCreateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutSenderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketMessageCreateOrConnectWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageCreateOrConnectWithoutSenderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketMessageCreateManySenderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TicketMessageWhereUniqueInputObjectSchema), z.lazy(() => TicketMessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TicketMessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TicketMessageUpdateManyWithWhereWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUpdateManyWithWhereWithoutSenderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TicketMessageScalarWhereInputObjectSchema), z.lazy(() => TicketMessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TicketMessageUncheckedUpdateManyWithoutSenderNestedInputObjectSchema: z.ZodType<Prisma.TicketMessageUncheckedUpdateManyWithoutSenderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUncheckedUpdateManyWithoutSenderNestedInput>;
export const TicketMessageUncheckedUpdateManyWithoutSenderNestedInputObjectZodSchema = makeSchema();

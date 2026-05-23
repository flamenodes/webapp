import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketCreateWithoutAssignedToInputObjectSchema as TicketCreateWithoutAssignedToInputObjectSchema } from './TicketCreateWithoutAssignedToInput.schema';
import { TicketUncheckedCreateWithoutAssignedToInputObjectSchema as TicketUncheckedCreateWithoutAssignedToInputObjectSchema } from './TicketUncheckedCreateWithoutAssignedToInput.schema';
import { TicketCreateOrConnectWithoutAssignedToInputObjectSchema as TicketCreateOrConnectWithoutAssignedToInputObjectSchema } from './TicketCreateOrConnectWithoutAssignedToInput.schema';
import { TicketUpsertWithWhereUniqueWithoutAssignedToInputObjectSchema as TicketUpsertWithWhereUniqueWithoutAssignedToInputObjectSchema } from './TicketUpsertWithWhereUniqueWithoutAssignedToInput.schema';
import { TicketCreateManyAssignedToInputEnvelopeObjectSchema as TicketCreateManyAssignedToInputEnvelopeObjectSchema } from './TicketCreateManyAssignedToInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectSchema as TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectSchema } from './TicketUpdateWithWhereUniqueWithoutAssignedToInput.schema';
import { TicketUpdateManyWithWhereWithoutAssignedToInputObjectSchema as TicketUpdateManyWithWhereWithoutAssignedToInputObjectSchema } from './TicketUpdateManyWithWhereWithoutAssignedToInput.schema';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketCreateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketCreateWithoutAssignedToInputObjectSchema).array(), z.lazy(() => TicketUncheckedCreateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAssignedToInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketCreateOrConnectWithoutAssignedToInputObjectSchema), z.lazy(() => TicketCreateOrConnectWithoutAssignedToInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TicketUpsertWithWhereUniqueWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUpsertWithWhereUniqueWithoutAssignedToInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketCreateManyAssignedToInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TicketUpdateManyWithWhereWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUpdateManyWithWhereWithoutAssignedToInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TicketUncheckedUpdateManyWithoutAssignedToNestedInputObjectSchema: z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutAssignedToNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutAssignedToNestedInput>;
export const TicketUncheckedUpdateManyWithoutAssignedToNestedInputObjectZodSchema = makeSchema();

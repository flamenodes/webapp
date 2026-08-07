import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketCreateWithoutAssignedToInputObjectSchema as TicketCreateWithoutAssignedToInputObjectSchema } from './TicketCreateWithoutAssignedToInput.schema';
import { TicketUncheckedCreateWithoutAssignedToInputObjectSchema as TicketUncheckedCreateWithoutAssignedToInputObjectSchema } from './TicketUncheckedCreateWithoutAssignedToInput.schema';
import { TicketCreateOrConnectWithoutAssignedToInputObjectSchema as TicketCreateOrConnectWithoutAssignedToInputObjectSchema } from './TicketCreateOrConnectWithoutAssignedToInput.schema';
import { TicketCreateManyAssignedToInputEnvelopeObjectSchema as TicketCreateManyAssignedToInputEnvelopeObjectSchema } from './TicketCreateManyAssignedToInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketCreateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketCreateWithoutAssignedToInputObjectSchema).array(), z.lazy(() => TicketUncheckedCreateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAssignedToInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketCreateOrConnectWithoutAssignedToInputObjectSchema), z.lazy(() => TicketCreateOrConnectWithoutAssignedToInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketCreateManyAssignedToInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TicketCreateNestedManyWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketCreateNestedManyWithoutAssignedToInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateNestedManyWithoutAssignedToInput>;
export const TicketCreateNestedManyWithoutAssignedToInputObjectZodSchema = makeSchema();

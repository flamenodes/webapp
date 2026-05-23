import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutAssignedToInputObjectSchema as TicketUpdateWithoutAssignedToInputObjectSchema } from './TicketUpdateWithoutAssignedToInput.schema';
import { TicketUncheckedUpdateWithoutAssignedToInputObjectSchema as TicketUncheckedUpdateWithoutAssignedToInputObjectSchema } from './TicketUncheckedUpdateWithoutAssignedToInput.schema';
import { TicketCreateWithoutAssignedToInputObjectSchema as TicketCreateWithoutAssignedToInputObjectSchema } from './TicketCreateWithoutAssignedToInput.schema';
import { TicketUncheckedCreateWithoutAssignedToInputObjectSchema as TicketUncheckedCreateWithoutAssignedToInputObjectSchema } from './TicketUncheckedCreateWithoutAssignedToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TicketUpdateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutAssignedToInputObjectSchema)]),
  create: z.union([z.lazy(() => TicketCreateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAssignedToInputObjectSchema)])
}).strict();
export const TicketUpsertWithWhereUniqueWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutAssignedToInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutAssignedToInput>;
export const TicketUpsertWithWhereUniqueWithoutAssignedToInputObjectZodSchema = makeSchema();

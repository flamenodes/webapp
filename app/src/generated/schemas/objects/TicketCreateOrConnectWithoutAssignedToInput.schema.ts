import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutAssignedToInputObjectSchema as TicketCreateWithoutAssignedToInputObjectSchema } from './TicketCreateWithoutAssignedToInput.schema';
import { TicketUncheckedCreateWithoutAssignedToInputObjectSchema as TicketUncheckedCreateWithoutAssignedToInputObjectSchema } from './TicketUncheckedCreateWithoutAssignedToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TicketCreateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAssignedToInputObjectSchema)])
}).strict();
export const TicketCreateOrConnectWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutAssignedToInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateOrConnectWithoutAssignedToInput>;
export const TicketCreateOrConnectWithoutAssignedToInputObjectZodSchema = makeSchema();

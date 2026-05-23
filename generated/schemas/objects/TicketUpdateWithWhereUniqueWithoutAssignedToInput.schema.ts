import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutAssignedToInputObjectSchema as TicketUpdateWithoutAssignedToInputObjectSchema } from './TicketUpdateWithoutAssignedToInput.schema';
import { TicketUncheckedUpdateWithoutAssignedToInputObjectSchema as TicketUncheckedUpdateWithoutAssignedToInputObjectSchema } from './TicketUncheckedUpdateWithoutAssignedToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TicketUpdateWithoutAssignedToInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutAssignedToInputObjectSchema)])
}).strict();
export const TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutAssignedToInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutAssignedToInput>;
export const TicketUpdateWithWhereUniqueWithoutAssignedToInputObjectZodSchema = makeSchema();

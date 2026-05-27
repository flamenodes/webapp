import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutAssignedToInputObjectSchema as TicketUncheckedUpdateManyWithoutAssignedToInputObjectSchema } from './TicketUncheckedUpdateManyWithoutAssignedToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TicketUpdateManyMutationInputObjectSchema), z.lazy(() => TicketUncheckedUpdateManyWithoutAssignedToInputObjectSchema)])
}).strict();
export const TicketUpdateManyWithWhereWithoutAssignedToInputObjectSchema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutAssignedToInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutAssignedToInput>;
export const TicketUpdateManyWithWhereWithoutAssignedToInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketUpdateWithoutMessagesInputObjectSchema as TicketUpdateWithoutMessagesInputObjectSchema } from './TicketUpdateWithoutMessagesInput.schema';
import { TicketUncheckedUpdateWithoutMessagesInputObjectSchema as TicketUncheckedUpdateWithoutMessagesInputObjectSchema } from './TicketUncheckedUpdateWithoutMessagesInput.schema';
import { TicketCreateWithoutMessagesInputObjectSchema as TicketCreateWithoutMessagesInputObjectSchema } from './TicketCreateWithoutMessagesInput.schema';
import { TicketUncheckedCreateWithoutMessagesInputObjectSchema as TicketUncheckedCreateWithoutMessagesInputObjectSchema } from './TicketUncheckedCreateWithoutMessagesInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TicketUpdateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutMessagesInputObjectSchema)]),
  create: z.union([z.lazy(() => TicketCreateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutMessagesInputObjectSchema)]),
  where: z.lazy(() => TicketWhereInputObjectSchema).optional()
}).strict();
export const TicketUpsertWithoutMessagesInputObjectSchema: z.ZodType<Prisma.TicketUpsertWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpsertWithoutMessagesInput>;
export const TicketUpsertWithoutMessagesInputObjectZodSchema = makeSchema();

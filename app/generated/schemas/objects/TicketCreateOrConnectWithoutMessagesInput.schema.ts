import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutMessagesInputObjectSchema as TicketCreateWithoutMessagesInputObjectSchema } from './TicketCreateWithoutMessagesInput.schema';
import { TicketUncheckedCreateWithoutMessagesInputObjectSchema as TicketUncheckedCreateWithoutMessagesInputObjectSchema } from './TicketUncheckedCreateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TicketCreateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutMessagesInputObjectSchema)])
}).strict();
export const TicketCreateOrConnectWithoutMessagesInputObjectSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateOrConnectWithoutMessagesInput>;
export const TicketCreateOrConnectWithoutMessagesInputObjectZodSchema = makeSchema();

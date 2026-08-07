import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketCreateWithoutMessagesInputObjectSchema as TicketCreateWithoutMessagesInputObjectSchema } from './TicketCreateWithoutMessagesInput.schema';
import { TicketUncheckedCreateWithoutMessagesInputObjectSchema as TicketUncheckedCreateWithoutMessagesInputObjectSchema } from './TicketUncheckedCreateWithoutMessagesInput.schema';
import { TicketCreateOrConnectWithoutMessagesInputObjectSchema as TicketCreateOrConnectWithoutMessagesInputObjectSchema } from './TicketCreateOrConnectWithoutMessagesInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketCreateWithoutMessagesInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TicketCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => TicketWhereUniqueInputObjectSchema).optional()
}).strict();
export const TicketCreateNestedOneWithoutMessagesInputObjectSchema: z.ZodType<Prisma.TicketCreateNestedOneWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateNestedOneWithoutMessagesInput>;
export const TicketCreateNestedOneWithoutMessagesInputObjectZodSchema = makeSchema();

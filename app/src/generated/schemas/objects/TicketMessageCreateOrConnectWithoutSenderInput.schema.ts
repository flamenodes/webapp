import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageCreateWithoutSenderInputObjectSchema as TicketMessageCreateWithoutSenderInputObjectSchema } from './TicketMessageCreateWithoutSenderInput.schema';
import { TicketMessageUncheckedCreateWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateWithoutSenderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TicketMessageCreateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutSenderInputObjectSchema)])
}).strict();
export const TicketMessageCreateOrConnectWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateOrConnectWithoutSenderInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateOrConnectWithoutSenderInput>;
export const TicketMessageCreateOrConnectWithoutSenderInputObjectZodSchema = makeSchema();

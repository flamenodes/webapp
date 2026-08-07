import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithoutSenderInputObjectSchema as TicketMessageUpdateWithoutSenderInputObjectSchema } from './TicketMessageUpdateWithoutSenderInput.schema';
import { TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema as TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema } from './TicketMessageUncheckedUpdateWithoutSenderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TicketMessageUpdateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema)])
}).strict();
export const TicketMessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateWithWhereUniqueWithoutSenderInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUpdateWithWhereUniqueWithoutSenderInput>;
export const TicketMessageUpdateWithWhereUniqueWithoutSenderInputObjectZodSchema = makeSchema();

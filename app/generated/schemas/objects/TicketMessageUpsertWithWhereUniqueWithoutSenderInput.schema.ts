import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithoutSenderInputObjectSchema as TicketMessageUpdateWithoutSenderInputObjectSchema } from './TicketMessageUpdateWithoutSenderInput.schema';
import { TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema as TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema } from './TicketMessageUncheckedUpdateWithoutSenderInput.schema';
import { TicketMessageCreateWithoutSenderInputObjectSchema as TicketMessageCreateWithoutSenderInputObjectSchema } from './TicketMessageCreateWithoutSenderInput.schema';
import { TicketMessageUncheckedCreateWithoutSenderInputObjectSchema as TicketMessageUncheckedCreateWithoutSenderInputObjectSchema } from './TicketMessageUncheckedCreateWithoutSenderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TicketMessageUpdateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateWithoutSenderInputObjectSchema)]),
  create: z.union([z.lazy(() => TicketMessageCreateWithoutSenderInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutSenderInputObjectSchema)])
}).strict();
export const TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema: z.ZodType<Prisma.TicketMessageUpsertWithWhereUniqueWithoutSenderInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUpsertWithWhereUniqueWithoutSenderInput>;
export const TicketMessageUpsertWithWhereUniqueWithoutSenderInputObjectZodSchema = makeSchema();

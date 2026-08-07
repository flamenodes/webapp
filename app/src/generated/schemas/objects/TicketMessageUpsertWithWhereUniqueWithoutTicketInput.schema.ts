import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithoutTicketInputObjectSchema as TicketMessageUpdateWithoutTicketInputObjectSchema } from './TicketMessageUpdateWithoutTicketInput.schema';
import { TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema as TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedUpdateWithoutTicketInput.schema';
import { TicketMessageCreateWithoutTicketInputObjectSchema as TicketMessageCreateWithoutTicketInputObjectSchema } from './TicketMessageCreateWithoutTicketInput.schema';
import { TicketMessageUncheckedCreateWithoutTicketInputObjectSchema as TicketMessageUncheckedCreateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedCreateWithoutTicketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TicketMessageUpdateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema)]),
  create: z.union([z.lazy(() => TicketMessageCreateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutTicketInputObjectSchema)])
}).strict();
export const TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUpsertWithWhereUniqueWithoutTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUpsertWithWhereUniqueWithoutTicketInput>;
export const TicketMessageUpsertWithWhereUniqueWithoutTicketInputObjectZodSchema = makeSchema();

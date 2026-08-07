import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageUpdateWithoutTicketInputObjectSchema as TicketMessageUpdateWithoutTicketInputObjectSchema } from './TicketMessageUpdateWithoutTicketInput.schema';
import { TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema as TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedUpdateWithoutTicketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TicketMessageUpdateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedUpdateWithoutTicketInputObjectSchema)])
}).strict();
export const TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageUpdateWithWhereUniqueWithoutTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageUpdateWithWhereUniqueWithoutTicketInput>;
export const TicketMessageUpdateWithWhereUniqueWithoutTicketInputObjectZodSchema = makeSchema();

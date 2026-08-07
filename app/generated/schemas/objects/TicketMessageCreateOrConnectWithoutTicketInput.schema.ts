import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './TicketMessageWhereUniqueInput.schema';
import { TicketMessageCreateWithoutTicketInputObjectSchema as TicketMessageCreateWithoutTicketInputObjectSchema } from './TicketMessageCreateWithoutTicketInput.schema';
import { TicketMessageUncheckedCreateWithoutTicketInputObjectSchema as TicketMessageUncheckedCreateWithoutTicketInputObjectSchema } from './TicketMessageUncheckedCreateWithoutTicketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TicketMessageCreateWithoutTicketInputObjectSchema), z.lazy(() => TicketMessageUncheckedCreateWithoutTicketInputObjectSchema)])
}).strict();
export const TicketMessageCreateOrConnectWithoutTicketInputObjectSchema: z.ZodType<Prisma.TicketMessageCreateOrConnectWithoutTicketInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketMessageCreateOrConnectWithoutTicketInput>;
export const TicketMessageCreateOrConnectWithoutTicketInputObjectZodSchema = makeSchema();

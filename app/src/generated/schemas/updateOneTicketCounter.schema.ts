import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterUpdateInputObjectSchema as TicketCounterUpdateInputObjectSchema } from './objects/TicketCounterUpdateInput.schema';
import { TicketCounterUncheckedUpdateInputObjectSchema as TicketCounterUncheckedUpdateInputObjectSchema } from './objects/TicketCounterUncheckedUpdateInput.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';

export const TicketCounterUpdateOneSchema: z.ZodType<Prisma.TicketCounterUpdateArgs> = z.object({ select: TicketCounterSelectObjectSchema.optional(),  data: z.union([TicketCounterUpdateInputObjectSchema, TicketCounterUncheckedUpdateInputObjectSchema]), where: TicketCounterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketCounterUpdateArgs>;

export const TicketCounterUpdateOneZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(),  data: z.union([TicketCounterUpdateInputObjectSchema, TicketCounterUncheckedUpdateInputObjectSchema]), where: TicketCounterWhereUniqueInputObjectSchema }).strict();
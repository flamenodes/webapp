import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';

export const TicketCounterFindUniqueSchema: z.ZodType<Prisma.TicketCounterFindUniqueArgs> = z.object({ select: TicketCounterSelectObjectSchema.optional(),  where: TicketCounterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketCounterFindUniqueArgs>;

export const TicketCounterFindUniqueZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(),  where: TicketCounterWhereUniqueInputObjectSchema }).strict();
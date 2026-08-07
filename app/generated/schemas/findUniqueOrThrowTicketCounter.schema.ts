import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';

export const TicketCounterFindUniqueOrThrowSchema: z.ZodType<Prisma.TicketCounterFindUniqueOrThrowArgs> = z.object({ select: TicketCounterSelectObjectSchema.optional(),  where: TicketCounterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketCounterFindUniqueOrThrowArgs>;

export const TicketCounterFindUniqueOrThrowZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(),  where: TicketCounterWhereUniqueInputObjectSchema }).strict();
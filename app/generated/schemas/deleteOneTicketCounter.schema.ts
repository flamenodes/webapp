import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';

export const TicketCounterDeleteOneSchema: z.ZodType<Prisma.TicketCounterDeleteArgs> = z.object({ select: TicketCounterSelectObjectSchema.optional(),  where: TicketCounterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketCounterDeleteArgs>;

export const TicketCounterDeleteOneZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(),  where: TicketCounterWhereUniqueInputObjectSchema }).strict();
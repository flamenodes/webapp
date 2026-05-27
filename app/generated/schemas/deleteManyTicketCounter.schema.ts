import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';

export const TicketCounterDeleteManySchema: z.ZodType<Prisma.TicketCounterDeleteManyArgs> = z.object({ where: TicketCounterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketCounterDeleteManyArgs>;

export const TicketCounterDeleteManyZodSchema = z.object({ where: TicketCounterWhereInputObjectSchema.optional() }).strict();
import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterUpdateManyMutationInputObjectSchema as TicketCounterUpdateManyMutationInputObjectSchema } from './objects/TicketCounterUpdateManyMutationInput.schema';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';

export const TicketCounterUpdateManyAndReturnSchema: z.ZodType<Prisma.TicketCounterUpdateManyAndReturnArgs> = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: TicketCounterUpdateManyMutationInputObjectSchema, where: TicketCounterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketCounterUpdateManyAndReturnArgs>;

export const TicketCounterUpdateManyAndReturnZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(), data: TicketCounterUpdateManyMutationInputObjectSchema, where: TicketCounterWhereInputObjectSchema.optional() }).strict();
import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketCounterUpdateManyMutationInputObjectSchema as TicketCounterUpdateManyMutationInputObjectSchema } from './objects/TicketCounterUpdateManyMutationInput.schema';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';

export const TicketCounterUpdateManySchema: z.ZodType<Prisma.TicketCounterUpdateManyArgs> = z.object({ data: TicketCounterUpdateManyMutationInputObjectSchema, where: TicketCounterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketCounterUpdateManyArgs>;

export const TicketCounterUpdateManyZodSchema = z.object({ data: TicketCounterUpdateManyMutationInputObjectSchema, where: TicketCounterWhereInputObjectSchema.optional() }).strict();
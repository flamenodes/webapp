import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketCounterSelectObjectSchema as TicketCounterSelectObjectSchema } from './objects/TicketCounterSelect.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
import { TicketCounterCreateInputObjectSchema as TicketCounterCreateInputObjectSchema } from './objects/TicketCounterCreateInput.schema';
import { TicketCounterUncheckedCreateInputObjectSchema as TicketCounterUncheckedCreateInputObjectSchema } from './objects/TicketCounterUncheckedCreateInput.schema';
import { TicketCounterUpdateInputObjectSchema as TicketCounterUpdateInputObjectSchema } from './objects/TicketCounterUpdateInput.schema';
import { TicketCounterUncheckedUpdateInputObjectSchema as TicketCounterUncheckedUpdateInputObjectSchema } from './objects/TicketCounterUncheckedUpdateInput.schema';

export const TicketCounterUpsertOneSchema: z.ZodType<Prisma.TicketCounterUpsertArgs> = z.object({ select: TicketCounterSelectObjectSchema.optional(),  where: TicketCounterWhereUniqueInputObjectSchema, create: z.union([ TicketCounterCreateInputObjectSchema, TicketCounterUncheckedCreateInputObjectSchema ]), update: z.union([ TicketCounterUpdateInputObjectSchema, TicketCounterUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TicketCounterUpsertArgs>;

export const TicketCounterUpsertOneZodSchema = z.object({ select: TicketCounterSelectObjectSchema.optional(),  where: TicketCounterWhereUniqueInputObjectSchema, create: z.union([ TicketCounterCreateInputObjectSchema, TicketCounterUncheckedCreateInputObjectSchema ]), update: z.union([ TicketCounterUpdateInputObjectSchema, TicketCounterUncheckedUpdateInputObjectSchema ]) }).strict();
import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageUpdateManyMutationInputObjectSchema as TicketMessageUpdateManyMutationInputObjectSchema } from './objects/TicketMessageUpdateManyMutationInput.schema';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './objects/TicketMessageWhereInput.schema';

export const TicketMessageUpdateManyAndReturnSchema: z.ZodType<Prisma.TicketMessageUpdateManyAndReturnArgs> = z.object({ select: TicketMessageSelectObjectSchema.optional(), data: TicketMessageUpdateManyMutationInputObjectSchema, where: TicketMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketMessageUpdateManyAndReturnArgs>;

export const TicketMessageUpdateManyAndReturnZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), data: TicketMessageUpdateManyMutationInputObjectSchema, where: TicketMessageWhereInputObjectSchema.optional() }).strict();
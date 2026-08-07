import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketMessageUpdateManyMutationInputObjectSchema as TicketMessageUpdateManyMutationInputObjectSchema } from './objects/TicketMessageUpdateManyMutationInput.schema';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './objects/TicketMessageWhereInput.schema';

export const TicketMessageUpdateManySchema: z.ZodType<Prisma.TicketMessageUpdateManyArgs> = z.object({ data: TicketMessageUpdateManyMutationInputObjectSchema, where: TicketMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketMessageUpdateManyArgs>;

export const TicketMessageUpdateManyZodSchema = z.object({ data: TicketMessageUpdateManyMutationInputObjectSchema, where: TicketMessageWhereInputObjectSchema.optional() }).strict();
import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './objects/TicketMessageWhereInput.schema';

export const TicketMessageDeleteManySchema: z.ZodType<Prisma.TicketMessageDeleteManyArgs> = z.object({ where: TicketMessageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketMessageDeleteManyArgs>;

export const TicketMessageDeleteManyZodSchema = z.object({ where: TicketMessageWhereInputObjectSchema.optional() }).strict();
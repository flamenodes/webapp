import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageIncludeObjectSchema as TicketMessageIncludeObjectSchema } from './objects/TicketMessageInclude.schema';
import { TicketMessageUpdateInputObjectSchema as TicketMessageUpdateInputObjectSchema } from './objects/TicketMessageUpdateInput.schema';
import { TicketMessageUncheckedUpdateInputObjectSchema as TicketMessageUncheckedUpdateInputObjectSchema } from './objects/TicketMessageUncheckedUpdateInput.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './objects/TicketMessageWhereUniqueInput.schema';

export const TicketMessageUpdateOneSchema: z.ZodType<Prisma.TicketMessageUpdateArgs> = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), data: z.union([TicketMessageUpdateInputObjectSchema, TicketMessageUncheckedUpdateInputObjectSchema]), where: TicketMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketMessageUpdateArgs>;

export const TicketMessageUpdateOneZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), data: z.union([TicketMessageUpdateInputObjectSchema, TicketMessageUncheckedUpdateInputObjectSchema]), where: TicketMessageWhereUniqueInputObjectSchema }).strict();
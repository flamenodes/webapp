import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageIncludeObjectSchema as TicketMessageIncludeObjectSchema } from './objects/TicketMessageInclude.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './objects/TicketMessageWhereUniqueInput.schema';

export const TicketMessageDeleteOneSchema: z.ZodType<Prisma.TicketMessageDeleteArgs> = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), where: TicketMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketMessageDeleteArgs>;

export const TicketMessageDeleteOneZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), where: TicketMessageWhereUniqueInputObjectSchema }).strict();
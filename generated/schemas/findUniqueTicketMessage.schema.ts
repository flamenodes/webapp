import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageIncludeObjectSchema as TicketMessageIncludeObjectSchema } from './objects/TicketMessageInclude.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './objects/TicketMessageWhereUniqueInput.schema';

export const TicketMessageFindUniqueSchema: z.ZodType<Prisma.TicketMessageFindUniqueArgs> = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), where: TicketMessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketMessageFindUniqueArgs>;

export const TicketMessageFindUniqueZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), include: TicketMessageIncludeObjectSchema.optional(), where: TicketMessageWhereUniqueInputObjectSchema }).strict();
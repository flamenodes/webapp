import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketMessageSelectObjectSchema as TicketMessageSelectObjectSchema } from './objects/TicketMessageSelect.schema';
import { TicketMessageCreateManyInputObjectSchema as TicketMessageCreateManyInputObjectSchema } from './objects/TicketMessageCreateManyInput.schema';

export const TicketMessageCreateManyAndReturnSchema: z.ZodType<Prisma.TicketMessageCreateManyAndReturnArgs> = z.object({ select: TicketMessageSelectObjectSchema.optional(), data: z.union([ TicketMessageCreateManyInputObjectSchema, z.array(TicketMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TicketMessageCreateManyAndReturnArgs>;

export const TicketMessageCreateManyAndReturnZodSchema = z.object({ select: TicketMessageSelectObjectSchema.optional(), data: z.union([ TicketMessageCreateManyInputObjectSchema, z.array(TicketMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketMessageCreateManyInputObjectSchema as TicketMessageCreateManyInputObjectSchema } from './objects/TicketMessageCreateManyInput.schema';

export const TicketMessageCreateManySchema: z.ZodType<Prisma.TicketMessageCreateManyArgs> = z.object({ data: z.union([ TicketMessageCreateManyInputObjectSchema, z.array(TicketMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TicketMessageCreateManyArgs>;

export const TicketMessageCreateManyZodSchema = z.object({ data: z.union([ TicketMessageCreateManyInputObjectSchema, z.array(TicketMessageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketCounterCreateManyInputObjectSchema as TicketCounterCreateManyInputObjectSchema } from './objects/TicketCounterCreateManyInput.schema';

export const TicketCounterCreateManySchema: z.ZodType<Prisma.TicketCounterCreateManyArgs> = z.object({ data: z.union([ TicketCounterCreateManyInputObjectSchema, z.array(TicketCounterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TicketCounterCreateManyArgs>;

export const TicketCounterCreateManyZodSchema = z.object({ data: z.union([ TicketCounterCreateManyInputObjectSchema, z.array(TicketCounterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
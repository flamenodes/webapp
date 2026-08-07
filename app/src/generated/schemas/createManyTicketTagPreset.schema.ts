import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketTagPresetCreateManyInputObjectSchema as TicketTagPresetCreateManyInputObjectSchema } from './objects/TicketTagPresetCreateManyInput.schema';

export const TicketTagPresetCreateManySchema: z.ZodType<Prisma.TicketTagPresetCreateManyArgs> = z.object({ data: z.union([ TicketTagPresetCreateManyInputObjectSchema, z.array(TicketTagPresetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetCreateManyArgs>;

export const TicketTagPresetCreateManyZodSchema = z.object({ data: z.union([ TicketTagPresetCreateManyInputObjectSchema, z.array(TicketTagPresetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
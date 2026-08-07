import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetCreateManyInputObjectSchema as TicketTagPresetCreateManyInputObjectSchema } from './objects/TicketTagPresetCreateManyInput.schema';

export const TicketTagPresetCreateManyAndReturnSchema: z.ZodType<Prisma.TicketTagPresetCreateManyAndReturnArgs> = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: z.union([ TicketTagPresetCreateManyInputObjectSchema, z.array(TicketTagPresetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetCreateManyAndReturnArgs>;

export const TicketTagPresetCreateManyAndReturnZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: z.union([ TicketTagPresetCreateManyInputObjectSchema, z.array(TicketTagPresetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
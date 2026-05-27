import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetCreateInputObjectSchema as TicketTagPresetCreateInputObjectSchema } from './objects/TicketTagPresetCreateInput.schema';
import { TicketTagPresetUncheckedCreateInputObjectSchema as TicketTagPresetUncheckedCreateInputObjectSchema } from './objects/TicketTagPresetUncheckedCreateInput.schema';

export const TicketTagPresetCreateOneSchema: z.ZodType<Prisma.TicketTagPresetCreateArgs> = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  data: z.union([TicketTagPresetCreateInputObjectSchema, TicketTagPresetUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetCreateArgs>;

export const TicketTagPresetCreateOneZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  data: z.union([TicketTagPresetCreateInputObjectSchema, TicketTagPresetUncheckedCreateInputObjectSchema]) }).strict();
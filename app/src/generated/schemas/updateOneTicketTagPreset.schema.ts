import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetUpdateInputObjectSchema as TicketTagPresetUpdateInputObjectSchema } from './objects/TicketTagPresetUpdateInput.schema';
import { TicketTagPresetUncheckedUpdateInputObjectSchema as TicketTagPresetUncheckedUpdateInputObjectSchema } from './objects/TicketTagPresetUncheckedUpdateInput.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';

export const TicketTagPresetUpdateOneSchema: z.ZodType<Prisma.TicketTagPresetUpdateArgs> = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  data: z.union([TicketTagPresetUpdateInputObjectSchema, TicketTagPresetUncheckedUpdateInputObjectSchema]), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetUpdateArgs>;

export const TicketTagPresetUpdateOneZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  data: z.union([TicketTagPresetUpdateInputObjectSchema, TicketTagPresetUncheckedUpdateInputObjectSchema]), where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
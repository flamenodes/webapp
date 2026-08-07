import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';

export const TicketTagPresetDeleteOneSchema: z.ZodType<Prisma.TicketTagPresetDeleteArgs> = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  where: TicketTagPresetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetDeleteArgs>;

export const TicketTagPresetDeleteOneZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
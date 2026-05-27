import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';

export const TicketTagPresetFindUniqueSchema: z.ZodType<Prisma.TicketTagPresetFindUniqueArgs> = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  where: TicketTagPresetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetFindUniqueArgs>;

export const TicketTagPresetFindUniqueZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
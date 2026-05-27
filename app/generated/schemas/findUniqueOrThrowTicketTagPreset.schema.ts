import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';

export const TicketTagPresetFindUniqueOrThrowSchema: z.ZodType<Prisma.TicketTagPresetFindUniqueOrThrowArgs> = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  where: TicketTagPresetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetFindUniqueOrThrowArgs>;

export const TicketTagPresetFindUniqueOrThrowZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(),  where: TicketTagPresetWhereUniqueInputObjectSchema }).strict();
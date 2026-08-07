import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketTagPresetSelectObjectSchema as TicketTagPresetSelectObjectSchema } from './objects/TicketTagPresetSelect.schema';
import { TicketTagPresetUpdateManyMutationInputObjectSchema as TicketTagPresetUpdateManyMutationInputObjectSchema } from './objects/TicketTagPresetUpdateManyMutationInput.schema';
import { TicketTagPresetWhereInputObjectSchema as TicketTagPresetWhereInputObjectSchema } from './objects/TicketTagPresetWhereInput.schema';

export const TicketTagPresetUpdateManyAndReturnSchema: z.ZodType<Prisma.TicketTagPresetUpdateManyAndReturnArgs> = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: TicketTagPresetUpdateManyMutationInputObjectSchema, where: TicketTagPresetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetUpdateManyAndReturnArgs>;

export const TicketTagPresetUpdateManyAndReturnZodSchema = z.object({ select: TicketTagPresetSelectObjectSchema.optional(), data: TicketTagPresetUpdateManyMutationInputObjectSchema, where: TicketTagPresetWhereInputObjectSchema.optional() }).strict();
import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketTagPresetWhereInputObjectSchema as TicketTagPresetWhereInputObjectSchema } from './objects/TicketTagPresetWhereInput.schema';

export const TicketTagPresetDeleteManySchema: z.ZodType<Prisma.TicketTagPresetDeleteManyArgs> = z.object({ where: TicketTagPresetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetDeleteManyArgs>;

export const TicketTagPresetDeleteManyZodSchema = z.object({ where: TicketTagPresetWhereInputObjectSchema.optional() }).strict();
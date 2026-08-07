import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketTagPresetUpdateManyMutationInputObjectSchema as TicketTagPresetUpdateManyMutationInputObjectSchema } from './objects/TicketTagPresetUpdateManyMutationInput.schema';
import { TicketTagPresetWhereInputObjectSchema as TicketTagPresetWhereInputObjectSchema } from './objects/TicketTagPresetWhereInput.schema';

export const TicketTagPresetUpdateManySchema: z.ZodType<Prisma.TicketTagPresetUpdateManyArgs> = z.object({ data: TicketTagPresetUpdateManyMutationInputObjectSchema, where: TicketTagPresetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetUpdateManyArgs>;

export const TicketTagPresetUpdateManyZodSchema = z.object({ data: TicketTagPresetUpdateManyMutationInputObjectSchema, where: TicketTagPresetWhereInputObjectSchema.optional() }).strict();
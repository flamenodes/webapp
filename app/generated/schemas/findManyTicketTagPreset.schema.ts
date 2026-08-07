import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketTagPresetOrderByWithRelationInputObjectSchema as TicketTagPresetOrderByWithRelationInputObjectSchema } from './objects/TicketTagPresetOrderByWithRelationInput.schema';
import { TicketTagPresetWhereInputObjectSchema as TicketTagPresetWhereInputObjectSchema } from './objects/TicketTagPresetWhereInput.schema';
import { TicketTagPresetWhereUniqueInputObjectSchema as TicketTagPresetWhereUniqueInputObjectSchema } from './objects/TicketTagPresetWhereUniqueInput.schema';
import { TicketTagPresetScalarFieldEnumSchema } from './enums/TicketTagPresetScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketTagPresetFindManySelectSchema: z.ZodType<Prisma.TicketTagPresetSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetSelect>;

export const TicketTagPresetFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const TicketTagPresetFindManySchema: z.ZodType<Prisma.TicketTagPresetFindManyArgs> = z.object({ select: TicketTagPresetFindManySelectSchema.optional(),  orderBy: z.union([TicketTagPresetOrderByWithRelationInputObjectSchema, TicketTagPresetOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketTagPresetWhereInputObjectSchema.optional(), cursor: TicketTagPresetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketTagPresetScalarFieldEnumSchema, TicketTagPresetScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketTagPresetFindManyArgs>;

export const TicketTagPresetFindManyZodSchema = z.object({ select: TicketTagPresetFindManySelectSchema.optional(),  orderBy: z.union([TicketTagPresetOrderByWithRelationInputObjectSchema, TicketTagPresetOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketTagPresetWhereInputObjectSchema.optional(), cursor: TicketTagPresetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketTagPresetScalarFieldEnumSchema, TicketTagPresetScalarFieldEnumSchema.array()]).optional() }).strict();
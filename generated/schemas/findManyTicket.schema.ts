import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketOrderByWithRelationInputObjectSchema as TicketOrderByWithRelationInputObjectSchema } from './objects/TicketOrderByWithRelationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketScalarFieldEnumSchema } from './enums/TicketScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketFindManySelectSchema: z.ZodType<Prisma.TicketSelect> = z.object({
    id: z.boolean().optional(),
    ticketId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    priority: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    assignedToId: z.boolean().optional(),
    assignedTo: z.boolean().optional(),
    channelName: z.boolean().optional(),
    tags: z.boolean().optional(),
    messages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    closedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TicketSelect>;

export const TicketFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    ticketId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    priority: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    assignedToId: z.boolean().optional(),
    assignedTo: z.boolean().optional(),
    channelName: z.boolean().optional(),
    tags: z.boolean().optional(),
    messages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    closedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TicketFindManySchema: z.ZodType<Prisma.TicketFindManyArgs> = z.object({ select: TicketFindManySelectSchema.optional(), include: z.lazy(() => TicketIncludeObjectSchema.optional()), orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketFindManyArgs>;

export const TicketFindManyZodSchema = z.object({ select: TicketFindManySelectSchema.optional(), include: z.lazy(() => TicketIncludeObjectSchema.optional()), orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array()]).optional() }).strict();
import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketOrderByWithRelationInputObjectSchema as TicketOrderByWithRelationInputObjectSchema } from './objects/TicketOrderByWithRelationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketScalarFieldEnumSchema } from './enums/TicketScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { TicketMessageFindManySchema } from './findManyTicketMessage.schema';
import { TicketCountOutputTypeArgsObjectSchema as TicketCountOutputTypeArgsObjectSchema } from './objects/TicketCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TicketSelect> = z.object({
    id: z.boolean().optional(),
    ticketId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    priority: z.boolean().optional(),
    userId: z.boolean().optional(),
    assignedToId: z.boolean().optional(),
    channelName: z.boolean().optional(),
    tags: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    closedAt: z.boolean().optional(),
    assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    messages: z.union([z.boolean(), z.lazy(() => TicketMessageFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TicketCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.TicketSelect>;

export const TicketFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    ticketId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    priority: z.boolean().optional(),
    userId: z.boolean().optional(),
    assignedToId: z.boolean().optional(),
    channelName: z.boolean().optional(),
    tags: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    closedAt: z.boolean().optional(),
    assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    messages: z.union([z.boolean(), z.lazy(() => TicketMessageFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TicketCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const TicketFindFirstOrThrowSchema: z.ZodType<Prisma.TicketFindFirstOrThrowArgs> = z.object({ select: TicketFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TicketIncludeObjectSchema.optional()), orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketFindFirstOrThrowArgs>;

export const TicketFindFirstOrThrowZodSchema = z.object({ select: TicketFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TicketIncludeObjectSchema.optional()), orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array()]).optional() }).strict();
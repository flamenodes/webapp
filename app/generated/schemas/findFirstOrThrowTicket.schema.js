import * as z from 'zod';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketOrderByWithRelationInputObjectSchema as TicketOrderByWithRelationInputObjectSchema } from './objects/TicketOrderByWithRelationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketScalarFieldEnumSchema } from './enums/TicketScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const TicketFindFirstOrThrowSelectSchema = z.object({
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
export const TicketFindFirstOrThrowSelectZodSchema = z.object({
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
export const TicketFindFirstOrThrowSchema = z.object({ select: TicketFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TicketIncludeObjectSchema.optional()), orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array()]).optional() }).strict();
export const TicketFindFirstOrThrowZodSchema = z.object({ select: TicketFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TicketIncludeObjectSchema.optional()), orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstOrThrowTicket.schema.js.map
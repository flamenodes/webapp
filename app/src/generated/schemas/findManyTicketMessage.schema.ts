import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { TicketMessageIncludeObjectSchema as TicketMessageIncludeObjectSchema } from './objects/TicketMessageInclude.schema';
import { TicketMessageOrderByWithRelationInputObjectSchema as TicketMessageOrderByWithRelationInputObjectSchema } from './objects/TicketMessageOrderByWithRelationInput.schema';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './objects/TicketMessageWhereInput.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './objects/TicketMessageWhereUniqueInput.schema';
import { TicketMessageScalarFieldEnumSchema } from './enums/TicketMessageScalarFieldEnum.schema';
import { TicketArgsObjectSchema as TicketArgsObjectSchema } from './objects/TicketArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketMessageFindManySelectSchema: z.ZodType<Prisma.TicketMessageSelect> = z.object({
    id: z.boolean().optional(),
    ticketId: z.boolean().optional(),
    ticket: z.union([z.boolean(), z.lazy(() => TicketArgsObjectSchema)]).optional(),
    senderId: z.boolean().optional(),
    sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    senderRole: z.boolean().optional(),
    content: z.boolean().optional(),
    attachments: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TicketMessageSelect>;

export const TicketMessageFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    ticketId: z.boolean().optional(),
    ticket: z.union([z.boolean(), z.lazy(() => TicketArgsObjectSchema)]).optional(),
    senderId: z.boolean().optional(),
    sender: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    senderRole: z.boolean().optional(),
    content: z.boolean().optional(),
    attachments: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const TicketMessageFindManySchema: z.ZodType<Prisma.TicketMessageFindManyArgs> = z.object({ select: TicketMessageFindManySelectSchema.optional(), include: z.lazy(() => TicketMessageIncludeObjectSchema.optional()), orderBy: z.union([TicketMessageOrderByWithRelationInputObjectSchema, TicketMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketMessageWhereInputObjectSchema.optional(), cursor: TicketMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketMessageScalarFieldEnumSchema, TicketMessageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketMessageFindManyArgs>;

export const TicketMessageFindManyZodSchema = z.object({ select: TicketMessageFindManySelectSchema.optional(), include: z.lazy(() => TicketMessageIncludeObjectSchema.optional()), orderBy: z.union([TicketMessageOrderByWithRelationInputObjectSchema, TicketMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketMessageWhereInputObjectSchema.optional(), cursor: TicketMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketMessageScalarFieldEnumSchema, TicketMessageScalarFieldEnumSchema.array()]).optional() }).strict();
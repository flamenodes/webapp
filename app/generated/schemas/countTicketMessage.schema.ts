import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketMessageOrderByWithRelationInputObjectSchema as TicketMessageOrderByWithRelationInputObjectSchema } from './objects/TicketMessageOrderByWithRelationInput.schema';
import { TicketMessageWhereInputObjectSchema as TicketMessageWhereInputObjectSchema } from './objects/TicketMessageWhereInput.schema';
import { TicketMessageWhereUniqueInputObjectSchema as TicketMessageWhereUniqueInputObjectSchema } from './objects/TicketMessageWhereUniqueInput.schema';
import { TicketMessageCountAggregateInputObjectSchema as TicketMessageCountAggregateInputObjectSchema } from './objects/TicketMessageCountAggregateInput.schema';

export const TicketMessageCountSchema: z.ZodType<Prisma.TicketMessageCountArgs> = z.object({ orderBy: z.union([TicketMessageOrderByWithRelationInputObjectSchema, TicketMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketMessageWhereInputObjectSchema.optional(), cursor: TicketMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TicketMessageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketMessageCountArgs>;

export const TicketMessageCountZodSchema = z.object({ orderBy: z.union([TicketMessageOrderByWithRelationInputObjectSchema, TicketMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketMessageWhereInputObjectSchema.optional(), cursor: TicketMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TicketMessageCountAggregateInputObjectSchema ]).optional() }).strict();
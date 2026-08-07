import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketCounterOrderByWithRelationInputObjectSchema as TicketCounterOrderByWithRelationInputObjectSchema } from './objects/TicketCounterOrderByWithRelationInput.schema';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
import { TicketCounterCountAggregateInputObjectSchema as TicketCounterCountAggregateInputObjectSchema } from './objects/TicketCounterCountAggregateInput.schema';

export const TicketCounterCountSchema: z.ZodType<Prisma.TicketCounterCountArgs> = z.object({ orderBy: z.union([TicketCounterOrderByWithRelationInputObjectSchema, TicketCounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketCounterWhereInputObjectSchema.optional(), cursor: TicketCounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TicketCounterCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketCounterCountArgs>;

export const TicketCounterCountZodSchema = z.object({ orderBy: z.union([TicketCounterOrderByWithRelationInputObjectSchema, TicketCounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketCounterWhereInputObjectSchema.optional(), cursor: TicketCounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TicketCounterCountAggregateInputObjectSchema ]).optional() }).strict();
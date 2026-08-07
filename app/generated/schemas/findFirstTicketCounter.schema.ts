import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { TicketCounterOrderByWithRelationInputObjectSchema as TicketCounterOrderByWithRelationInputObjectSchema } from './objects/TicketCounterOrderByWithRelationInput.schema';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
import { TicketCounterScalarFieldEnumSchema } from './enums/TicketCounterScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketCounterFindFirstSelectSchema: z.ZodType<Prisma.TicketCounterSelect> = z.object({
    id: z.boolean().optional(),
    seq: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TicketCounterSelect>;

export const TicketCounterFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    seq: z.boolean().optional()
  }).strict();

export const TicketCounterFindFirstSchema: z.ZodType<Prisma.TicketCounterFindFirstArgs> = z.object({ select: TicketCounterFindFirstSelectSchema.optional(),  orderBy: z.union([TicketCounterOrderByWithRelationInputObjectSchema, TicketCounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketCounterWhereInputObjectSchema.optional(), cursor: TicketCounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketCounterScalarFieldEnumSchema, TicketCounterScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketCounterFindFirstArgs>;

export const TicketCounterFindFirstZodSchema = z.object({ select: TicketCounterFindFirstSelectSchema.optional(),  orderBy: z.union([TicketCounterOrderByWithRelationInputObjectSchema, TicketCounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketCounterWhereInputObjectSchema.optional(), cursor: TicketCounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketCounterScalarFieldEnumSchema, TicketCounterScalarFieldEnumSchema.array()]).optional() }).strict();
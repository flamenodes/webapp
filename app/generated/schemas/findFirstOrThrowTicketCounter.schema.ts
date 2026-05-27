import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketCounterOrderByWithRelationInputObjectSchema as TicketCounterOrderByWithRelationInputObjectSchema } from './objects/TicketCounterOrderByWithRelationInput.schema';
import { TicketCounterWhereInputObjectSchema as TicketCounterWhereInputObjectSchema } from './objects/TicketCounterWhereInput.schema';
import { TicketCounterWhereUniqueInputObjectSchema as TicketCounterWhereUniqueInputObjectSchema } from './objects/TicketCounterWhereUniqueInput.schema';
import { TicketCounterScalarFieldEnumSchema } from './enums/TicketCounterScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketCounterFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TicketCounterSelect> = z.object({
    id: z.boolean().optional(),
    seq: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TicketCounterSelect>;

export const TicketCounterFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    seq: z.boolean().optional()
  }).strict();

export const TicketCounterFindFirstOrThrowSchema: z.ZodType<Prisma.TicketCounterFindFirstOrThrowArgs> = z.object({ select: TicketCounterFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([TicketCounterOrderByWithRelationInputObjectSchema, TicketCounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketCounterWhereInputObjectSchema.optional(), cursor: TicketCounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketCounterScalarFieldEnumSchema, TicketCounterScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketCounterFindFirstOrThrowArgs>;

export const TicketCounterFindFirstOrThrowZodSchema = z.object({ select: TicketCounterFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([TicketCounterOrderByWithRelationInputObjectSchema, TicketCounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketCounterWhereInputObjectSchema.optional(), cursor: TicketCounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketCounterScalarFieldEnumSchema, TicketCounterScalarFieldEnumSchema.array()]).optional() }).strict();
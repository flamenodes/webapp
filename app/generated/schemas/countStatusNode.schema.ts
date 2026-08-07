import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { StatusNodeOrderByWithRelationInputObjectSchema as StatusNodeOrderByWithRelationInputObjectSchema } from './objects/StatusNodeOrderByWithRelationInput.schema';
import { StatusNodeWhereInputObjectSchema as StatusNodeWhereInputObjectSchema } from './objects/StatusNodeWhereInput.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';
import { StatusNodeCountAggregateInputObjectSchema as StatusNodeCountAggregateInputObjectSchema } from './objects/StatusNodeCountAggregateInput.schema';

export const StatusNodeCountSchema: z.ZodType<Prisma.StatusNodeCountArgs> = z.object({ orderBy: z.union([StatusNodeOrderByWithRelationInputObjectSchema, StatusNodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StatusNodeWhereInputObjectSchema.optional(), cursor: StatusNodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StatusNodeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StatusNodeCountArgs>;

export const StatusNodeCountZodSchema = z.object({ orderBy: z.union([StatusNodeOrderByWithRelationInputObjectSchema, StatusNodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StatusNodeWhereInputObjectSchema.optional(), cursor: StatusNodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StatusNodeCountAggregateInputObjectSchema ]).optional() }).strict();
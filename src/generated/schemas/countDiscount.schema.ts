import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { DiscountOrderByWithRelationInputObjectSchema as DiscountOrderByWithRelationInputObjectSchema } from './objects/DiscountOrderByWithRelationInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './objects/DiscountWhereInput.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './objects/DiscountWhereUniqueInput.schema';
import { DiscountCountAggregateInputObjectSchema as DiscountCountAggregateInputObjectSchema } from './objects/DiscountCountAggregateInput.schema';

export const DiscountCountSchema: z.ZodType<Prisma.DiscountCountArgs> = z.object({ orderBy: z.union([DiscountOrderByWithRelationInputObjectSchema, DiscountOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiscountWhereInputObjectSchema.optional(), cursor: DiscountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DiscountCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DiscountCountArgs>;

export const DiscountCountZodSchema = z.object({ orderBy: z.union([DiscountOrderByWithRelationInputObjectSchema, DiscountOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiscountWhereInputObjectSchema.optional(), cursor: DiscountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DiscountCountAggregateInputObjectSchema ]).optional() }).strict();
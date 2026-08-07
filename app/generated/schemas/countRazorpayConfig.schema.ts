import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { RazorpayConfigOrderByWithRelationInputObjectSchema as RazorpayConfigOrderByWithRelationInputObjectSchema } from './objects/RazorpayConfigOrderByWithRelationInput.schema';
import { RazorpayConfigWhereInputObjectSchema as RazorpayConfigWhereInputObjectSchema } from './objects/RazorpayConfigWhereInput.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';
import { RazorpayConfigCountAggregateInputObjectSchema as RazorpayConfigCountAggregateInputObjectSchema } from './objects/RazorpayConfigCountAggregateInput.schema';

export const RazorpayConfigCountSchema: z.ZodType<Prisma.RazorpayConfigCountArgs> = z.object({ orderBy: z.union([RazorpayConfigOrderByWithRelationInputObjectSchema, RazorpayConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: RazorpayConfigWhereInputObjectSchema.optional(), cursor: RazorpayConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RazorpayConfigCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigCountArgs>;

export const RazorpayConfigCountZodSchema = z.object({ orderBy: z.union([RazorpayConfigOrderByWithRelationInputObjectSchema, RazorpayConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: RazorpayConfigWhereInputObjectSchema.optional(), cursor: RazorpayConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RazorpayConfigCountAggregateInputObjectSchema ]).optional() }).strict();
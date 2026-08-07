import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { ProductFeatureOrderByWithRelationInputObjectSchema as ProductFeatureOrderByWithRelationInputObjectSchema } from './objects/ProductFeatureOrderByWithRelationInput.schema';
import { ProductFeatureWhereInputObjectSchema as ProductFeatureWhereInputObjectSchema } from './objects/ProductFeatureWhereInput.schema';
import { ProductFeatureWhereUniqueInputObjectSchema as ProductFeatureWhereUniqueInputObjectSchema } from './objects/ProductFeatureWhereUniqueInput.schema';
import { ProductFeatureCountAggregateInputObjectSchema as ProductFeatureCountAggregateInputObjectSchema } from './objects/ProductFeatureCountAggregateInput.schema';

export const ProductFeatureCountSchema: z.ZodType<Prisma.ProductFeatureCountArgs> = z.object({ orderBy: z.union([ProductFeatureOrderByWithRelationInputObjectSchema, ProductFeatureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductFeatureWhereInputObjectSchema.optional(), cursor: ProductFeatureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductFeatureCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductFeatureCountArgs>;

export const ProductFeatureCountZodSchema = z.object({ orderBy: z.union([ProductFeatureOrderByWithRelationInputObjectSchema, ProductFeatureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductFeatureWhereInputObjectSchema.optional(), cursor: ProductFeatureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductFeatureCountAggregateInputObjectSchema ]).optional() }).strict();
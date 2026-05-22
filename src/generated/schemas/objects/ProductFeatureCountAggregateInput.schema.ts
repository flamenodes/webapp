import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  label: z.literal(true).optional(),
  sortOrder: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductFeatureCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureCountAggregateInputType>;
export const ProductFeatureCountAggregateInputObjectZodSchema = makeSchema();

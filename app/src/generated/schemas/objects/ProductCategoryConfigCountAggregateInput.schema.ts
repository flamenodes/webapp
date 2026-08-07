import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  category: z.literal(true).optional(),
  billingPeriods: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductCategoryConfigCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigCountAggregateInputType>;
export const ProductCategoryConfigCountAggregateInputObjectZodSchema = makeSchema();

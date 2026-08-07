import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  planName: z.literal(true).optional(),
  icon: z.literal(true).optional(),
  badge: z.literal(true).optional(),
  category: z.literal(true).optional(),
  price: z.literal(true).optional(),
  sortOrder: z.literal(true).optional(),
  featureCategory: z.literal(true).optional(),
  inStock: z.literal(true).optional(),
  discountId: z.literal(true).optional(),
  deployMode: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProductMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductMinAggregateInputType>;
export const ProductMinAggregateInputObjectZodSchema = makeSchema();

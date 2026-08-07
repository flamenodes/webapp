import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  label: z.literal(true).optional(),
  sortOrder: z.literal(true).optional()
}).strict();
export const ProductFeatureMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureMinAggregateInputType>;
export const ProductFeatureMinAggregateInputObjectZodSchema = makeSchema();

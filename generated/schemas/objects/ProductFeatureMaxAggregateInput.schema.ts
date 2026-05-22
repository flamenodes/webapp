import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  label: z.literal(true).optional(),
  sortOrder: z.literal(true).optional()
}).strict();
export const ProductFeatureMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureMaxAggregateInputType>;
export const ProductFeatureMaxAggregateInputObjectZodSchema = makeSchema();

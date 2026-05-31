import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  category: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProductCategoryConfigMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigMinAggregateInputType>;
export const ProductCategoryConfigMinAggregateInputObjectZodSchema = makeSchema();

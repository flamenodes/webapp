import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  sortOrder: z.literal(true).optional()
}).strict();
export const ProductFeatureAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureAvgAggregateInputType>;
export const ProductFeatureAvgAggregateInputObjectZodSchema = makeSchema();

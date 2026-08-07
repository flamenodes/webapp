import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  sortOrder: z.literal(true).optional()
}).strict();
export const ProductFeatureSumAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureSumAggregateInputType>;
export const ProductFeatureSumAggregateInputObjectZodSchema = makeSchema();

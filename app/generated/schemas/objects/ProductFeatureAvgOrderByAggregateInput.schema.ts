import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  sortOrder: SortOrderSchema.optional()
}).strict();
export const ProductFeatureAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureAvgOrderByAggregateInput>;
export const ProductFeatureAvgOrderByAggregateInputObjectZodSchema = makeSchema();

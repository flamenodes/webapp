import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProductFeatureOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProductFeatureOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductFeatureOrderByRelationAggregateInput>;
export const ProductFeatureOrderByRelationAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByRelationAggregateInputObjectSchema as ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  percentage: SortOrderSchema.optional(),
  product: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DiscountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DiscountOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountOrderByWithRelationInput>;
export const DiscountOrderByWithRelationInputObjectZodSchema = makeSchema();

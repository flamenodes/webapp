import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  price: SortOrderSchema.optional(),
  customDays: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionAvgOrderByAggregateInput>;
export const ProductBillingOptionAvgOrderByAggregateInputObjectZodSchema = makeSchema();

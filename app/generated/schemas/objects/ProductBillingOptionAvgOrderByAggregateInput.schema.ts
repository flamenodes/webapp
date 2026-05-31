import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  price: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionAvgOrderByAggregateInput>;
export const ProductBillingOptionAvgOrderByAggregateInputObjectZodSchema = makeSchema();

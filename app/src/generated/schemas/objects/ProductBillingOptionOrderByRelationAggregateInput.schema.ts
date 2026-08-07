import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProductBillingOptionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProductBillingOptionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductBillingOptionOrderByRelationAggregateInput>;
export const ProductBillingOptionOrderByRelationAggregateInputObjectZodSchema = makeSchema();

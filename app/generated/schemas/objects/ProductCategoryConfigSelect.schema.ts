import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  category: z.boolean().optional(),
  billingPeriods: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ProductCategoryConfigSelectObjectSchema: z.ZodType<Prisma.ProductCategoryConfigSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductCategoryConfigSelect>;
export const ProductCategoryConfigSelectObjectZodSchema = makeSchema();

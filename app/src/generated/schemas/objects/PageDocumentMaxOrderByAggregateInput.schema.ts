import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PageDocumentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageDocumentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentMaxOrderByAggregateInput>;
export const PageDocumentMaxOrderByAggregateInputObjectZodSchema = makeSchema();

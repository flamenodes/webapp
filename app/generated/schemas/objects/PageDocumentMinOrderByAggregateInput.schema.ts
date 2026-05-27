import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
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
export const PageDocumentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageDocumentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentMinOrderByAggregateInput>;
export const PageDocumentMinOrderByAggregateInputObjectZodSchema = makeSchema();

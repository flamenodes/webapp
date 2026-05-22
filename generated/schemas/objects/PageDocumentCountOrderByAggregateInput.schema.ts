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
export const PageDocumentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageDocumentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageDocumentCountOrderByAggregateInput>;
export const PageDocumentCountOrderByAggregateInputObjectZodSchema = makeSchema();

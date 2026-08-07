import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AnnouncementMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnnouncementMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementMinOrderByAggregateInput>;
export const AnnouncementMinOrderByAggregateInputObjectZodSchema = makeSchema();

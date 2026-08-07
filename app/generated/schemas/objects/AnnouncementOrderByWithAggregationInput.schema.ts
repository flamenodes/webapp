import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AnnouncementCountOrderByAggregateInputObjectSchema as AnnouncementCountOrderByAggregateInputObjectSchema } from './AnnouncementCountOrderByAggregateInput.schema';
import { AnnouncementAvgOrderByAggregateInputObjectSchema as AnnouncementAvgOrderByAggregateInputObjectSchema } from './AnnouncementAvgOrderByAggregateInput.schema';
import { AnnouncementMaxOrderByAggregateInputObjectSchema as AnnouncementMaxOrderByAggregateInputObjectSchema } from './AnnouncementMaxOrderByAggregateInput.schema';
import { AnnouncementMinOrderByAggregateInputObjectSchema as AnnouncementMinOrderByAggregateInputObjectSchema } from './AnnouncementMinOrderByAggregateInput.schema';
import { AnnouncementSumOrderByAggregateInputObjectSchema as AnnouncementSumOrderByAggregateInputObjectSchema } from './AnnouncementSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  expiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AnnouncementCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AnnouncementAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AnnouncementMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AnnouncementMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AnnouncementSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AnnouncementOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AnnouncementOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementOrderByWithAggregationInput>;
export const AnnouncementOrderByWithAggregationInputObjectZodSchema = makeSchema();

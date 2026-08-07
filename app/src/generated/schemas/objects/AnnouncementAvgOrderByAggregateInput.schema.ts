import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  priority: SortOrderSchema.optional()
}).strict();
export const AnnouncementAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnnouncementAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementAvgOrderByAggregateInput>;
export const AnnouncementAvgOrderByAggregateInputObjectZodSchema = makeSchema();

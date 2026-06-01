import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  priority: SortOrderSchema.optional()
}).strict();
export const AnnouncementSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnnouncementSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementSumOrderByAggregateInput>;
export const AnnouncementSumOrderByAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const WebSettingsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WebSettingsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsCountOrderByAggregateInput>;
export const WebSettingsCountOrderByAggregateInputObjectZodSchema = makeSchema();

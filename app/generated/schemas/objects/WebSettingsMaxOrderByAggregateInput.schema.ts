import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const WebSettingsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WebSettingsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsMaxOrderByAggregateInput>;
export const WebSettingsMaxOrderByAggregateInputObjectZodSchema = makeSchema();

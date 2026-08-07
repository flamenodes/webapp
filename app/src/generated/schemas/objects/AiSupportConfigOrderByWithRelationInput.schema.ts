import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  systemPrompt: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AiSupportConfigOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AiSupportConfigOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiSupportConfigOrderByWithRelationInput>;
export const AiSupportConfigOrderByWithRelationInputObjectZodSchema = makeSchema();

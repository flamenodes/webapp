import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  systemPrompt: z.literal(true).optional(),
  model: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AiSupportConfigCountAggregateInputObjectSchema: z.ZodType<Prisma.AiSupportConfigCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiSupportConfigCountAggregateInputType>;
export const AiSupportConfigCountAggregateInputObjectZodSchema = makeSchema();

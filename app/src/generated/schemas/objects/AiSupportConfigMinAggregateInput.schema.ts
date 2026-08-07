import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  systemPrompt: z.literal(true).optional(),
  model: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const AiSupportConfigMinAggregateInputObjectSchema: z.ZodType<Prisma.AiSupportConfigMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiSupportConfigMinAggregateInputType>;
export const AiSupportConfigMinAggregateInputObjectZodSchema = makeSchema();

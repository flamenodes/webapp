import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  enabled: z.boolean().optional(),
  systemPrompt: z.boolean().optional(),
  model: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const AiSupportConfigSelectObjectSchema: z.ZodType<Prisma.AiSupportConfigSelect> = makeSchema() as unknown as z.ZodType<Prisma.AiSupportConfigSelect>;
export const AiSupportConfigSelectObjectZodSchema = makeSchema();

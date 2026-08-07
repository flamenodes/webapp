import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  enabled: z.boolean().optional(),
  systemPrompt: z.string().optional(),
  model: z.string().optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional()
}).strict();
export const AiSupportConfigCreateManyInputObjectSchema: z.ZodType<Prisma.AiSupportConfigCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AiSupportConfigCreateManyInput>;
export const AiSupportConfigCreateManyInputObjectZodSchema = makeSchema();

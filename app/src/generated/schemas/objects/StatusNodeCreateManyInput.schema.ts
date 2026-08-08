import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  ip: z.string(),
  location: z.string(),
  type: z.string().optional(),
  port: z.number().int().optional(),
  protocol: z.string().optional(),
  status: z.string().optional(),
  latency: z.number().int().optional().nullable(),
  lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional().nullable(),
  createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time").optional(),
  cpu: z.number().optional().nullable(),
  disk: z.number().int().optional().nullable(),
  memory: z.number().int().optional().nullable()
}).strict();
export const StatusNodeCreateManyInputObjectSchema: z.ZodType<Prisma.StatusNodeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeCreateManyInput>;
export const StatusNodeCreateManyInputObjectZodSchema = makeSchema();

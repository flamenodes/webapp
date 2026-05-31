import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


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
  lastChecked: z.coerce.date().optional().nullable(),
  cpu: z.number().optional().nullable(),
  memory: z.number().int().optional().nullable(),
  disk: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const StatusNodeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StatusNodeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeUncheckedCreateInput>;
export const StatusNodeUncheckedCreateInputObjectZodSchema = makeSchema();

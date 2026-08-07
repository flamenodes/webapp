import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  ip: z.boolean().optional(),
  location: z.boolean().optional(),
  type: z.boolean().optional(),
  port: z.boolean().optional(),
  protocol: z.boolean().optional(),
  status: z.boolean().optional(),
  latency: z.boolean().optional(),
  lastChecked: z.boolean().optional(),
  cpu: z.boolean().optional(),
  memory: z.boolean().optional(),
  disk: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const StatusNodeSelectObjectSchema: z.ZodType<Prisma.StatusNodeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeSelect>;
export const StatusNodeSelectObjectZodSchema = makeSchema();

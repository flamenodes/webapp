import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  ip: z.literal(true).optional(),
  location: z.literal(true).optional(),
  type: z.literal(true).optional(),
  port: z.literal(true).optional(),
  protocol: z.literal(true).optional(),
  status: z.literal(true).optional(),
  latency: z.literal(true).optional(),
  lastChecked: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  cpu: z.literal(true).optional(),
  disk: z.literal(true).optional(),
  memory: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StatusNodeCountAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeCountAggregateInputType>;
export const StatusNodeCountAggregateInputObjectZodSchema = makeSchema();

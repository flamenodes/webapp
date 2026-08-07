import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  port: z.literal(true).optional(),
  latency: z.literal(true).optional(),
  cpu: z.literal(true).optional(),
  memory: z.literal(true).optional(),
  disk: z.literal(true).optional()
}).strict();
export const StatusNodeAvgAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeAvgAggregateInputType>;
export const StatusNodeAvgAggregateInputObjectZodSchema = makeSchema();

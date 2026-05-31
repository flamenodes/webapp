import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  port: z.literal(true).optional(),
  latency: z.literal(true).optional(),
  cpu: z.literal(true).optional(),
  memory: z.literal(true).optional(),
  disk: z.literal(true).optional()
}).strict();
export const StatusNodeSumAggregateInputObjectSchema: z.ZodType<Prisma.StatusNodeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StatusNodeSumAggregateInputType>;
export const StatusNodeSumAggregateInputObjectZodSchema = makeSchema();

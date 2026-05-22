import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  orderItemId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  status: z.literal(true).optional(),
  ip: z.literal(true).optional(),
  port: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  resources: z.literal(true).optional(),
  pterodactylData: z.literal(true).optional(),
  suspended: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ServerCountAggregateInputObjectSchema: z.ZodType<Prisma.ServerCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServerCountAggregateInputType>;
export const ServerCountAggregateInputObjectZodSchema = makeSchema();

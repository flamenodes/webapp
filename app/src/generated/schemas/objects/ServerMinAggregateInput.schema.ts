import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  orderItemId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  status: z.literal(true).optional(),
  ip: z.literal(true).optional(),
  port: z.literal(true).optional(),
  pterodactylServerId: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  suspended: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ServerMinAggregateInputObjectSchema: z.ZodType<Prisma.ServerMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServerMinAggregateInputType>;
export const ServerMinAggregateInputObjectZodSchema = makeSchema();

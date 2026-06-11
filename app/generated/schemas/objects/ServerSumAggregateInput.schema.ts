import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  port: z.literal(true).optional(),
  pterodactylServerId: z.literal(true).optional()
}).strict();
export const ServerSumAggregateInputObjectSchema: z.ZodType<Prisma.ServerSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServerSumAggregateInputType>;
export const ServerSumAggregateInputObjectZodSchema = makeSchema();

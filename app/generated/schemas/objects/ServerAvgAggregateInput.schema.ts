import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  port: z.literal(true).optional(),
  pterodactylServerId: z.literal(true).optional()
}).strict();
export const ServerAvgAggregateInputObjectSchema: z.ZodType<Prisma.ServerAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServerAvgAggregateInputType>;
export const ServerAvgAggregateInputObjectZodSchema = makeSchema();

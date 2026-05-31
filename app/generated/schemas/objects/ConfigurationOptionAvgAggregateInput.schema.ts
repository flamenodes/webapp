import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationOptionAvgAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionAvgAggregateInputType>;
export const ConfigurationOptionAvgAggregateInputObjectZodSchema = makeSchema();

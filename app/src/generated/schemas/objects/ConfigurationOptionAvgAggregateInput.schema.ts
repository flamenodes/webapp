import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationOptionAvgAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionAvgAggregateInputType>;
export const ConfigurationOptionAvgAggregateInputObjectZodSchema = makeSchema();

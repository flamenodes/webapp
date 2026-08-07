import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationOptionSumAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionSumAggregateInputType>;
export const ConfigurationOptionSumAggregateInputObjectZodSchema = makeSchema();

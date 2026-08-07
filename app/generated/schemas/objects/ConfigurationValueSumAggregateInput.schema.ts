import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  priceModifier: z.literal(true).optional(),
  sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationValueSumAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueSumAggregateInputType>;
export const ConfigurationValueSumAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  priceModifier: z.literal(true).optional(),
  sortOrder: z.literal(true).optional()
}).strict();
export const ConfigurationValueSumAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueSumAggregateInputType>;
export const ConfigurationValueSumAggregateInputObjectZodSchema = makeSchema();

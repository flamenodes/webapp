import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  optionId: z.literal(true).optional(),
  label: z.literal(true).optional(),
  value: z.literal(true).optional(),
  description: z.literal(true).optional(),
  priceModifier: z.literal(true).optional(),
  sortOrder: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ConfigurationValueMaxAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationValueMaxAggregateInputType>;
export const ConfigurationValueMaxAggregateInputObjectZodSchema = makeSchema();

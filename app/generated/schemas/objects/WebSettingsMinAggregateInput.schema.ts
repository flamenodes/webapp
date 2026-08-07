import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  key: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const WebSettingsMinAggregateInputObjectSchema: z.ZodType<Prisma.WebSettingsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsMinAggregateInputType>;
export const WebSettingsMinAggregateInputObjectZodSchema = makeSchema();

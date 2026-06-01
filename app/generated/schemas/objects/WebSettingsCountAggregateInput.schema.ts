import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  key: z.literal(true).optional(),
  value: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WebSettingsCountAggregateInputObjectSchema: z.ZodType<Prisma.WebSettingsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsCountAggregateInputType>;
export const WebSettingsCountAggregateInputObjectZodSchema = makeSchema();

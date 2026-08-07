import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  key: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const WebSettingsMaxAggregateInputObjectSchema: z.ZodType<Prisma.WebSettingsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsMaxAggregateInputType>;
export const WebSettingsMaxAggregateInputObjectZodSchema = makeSchema();

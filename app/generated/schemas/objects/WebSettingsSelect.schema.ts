import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  key: z.boolean().optional(),
  value: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const WebSettingsSelectObjectSchema: z.ZodType<Prisma.WebSettingsSelect> = makeSchema() as unknown as z.ZodType<Prisma.WebSettingsSelect>;
export const WebSettingsSelectObjectZodSchema = makeSchema();

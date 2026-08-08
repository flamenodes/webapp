import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { ConfigurationValueFindManySchema as ConfigurationValueFindManySchema } from '../findManyConfigurationValue.schema';
import { ConfigurationOptionCountOutputTypeArgsObjectSchema as ConfigurationOptionCountOutputTypeArgsObjectSchema } from './ConfigurationOptionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  label: z.boolean().optional(),
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  required: z.boolean().optional(),
  category: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  values: z.union([z.boolean(), z.lazy(() => ConfigurationValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ConfigurationOptionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ConfigurationOptionSelectObjectSchema: z.ZodType<Prisma.ConfigurationOptionSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionSelect>;
export const ConfigurationOptionSelectObjectZodSchema = makeSchema();

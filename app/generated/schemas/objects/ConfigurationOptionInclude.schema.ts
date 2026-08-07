import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { ConfigurationValueFindManySchema as ConfigurationValueFindManySchema } from '../findManyConfigurationValue.schema';
import { ConfigurationOptionCountOutputTypeArgsObjectSchema as ConfigurationOptionCountOutputTypeArgsObjectSchema } from './ConfigurationOptionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  values: z.union([z.boolean(), z.lazy(() => ConfigurationValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ConfigurationOptionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ConfigurationOptionIncludeObjectSchema: z.ZodType<Prisma.ConfigurationOptionInclude> = makeSchema() as unknown as z.ZodType<Prisma.ConfigurationOptionInclude>;
export const ConfigurationOptionIncludeObjectZodSchema = makeSchema();

import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './ConfigurationValueSelect.schema';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './ConfigurationValueInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ConfigurationValueSelectObjectSchema).optional(),
  include: z.lazy(() => ConfigurationValueIncludeObjectSchema).optional()
}).strict();
export const ConfigurationValueArgsObjectSchema = makeSchema();
export const ConfigurationValueArgsObjectZodSchema = makeSchema();

import * as z from 'zod';
import { ConfigurationOptionCountOutputTypeSelectObjectSchema as ConfigurationOptionCountOutputTypeSelectObjectSchema } from './ConfigurationOptionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ConfigurationOptionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ConfigurationOptionCountOutputTypeArgsObjectSchema = makeSchema();
export const ConfigurationOptionCountOutputTypeArgsObjectZodSchema = makeSchema();

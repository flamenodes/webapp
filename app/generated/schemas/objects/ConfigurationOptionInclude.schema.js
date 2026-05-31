import * as z from 'zod';
import { ConfigurationValueFindManySchema as ConfigurationValueFindManySchema } from '../findManyConfigurationValue.schema';
import { ConfigurationOptionCountOutputTypeArgsObjectSchema as ConfigurationOptionCountOutputTypeArgsObjectSchema } from './ConfigurationOptionCountOutputTypeArgs.schema';
const makeSchema = () => z.object({
    values: z.union([z.boolean(), z.lazy(() => ConfigurationValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ConfigurationOptionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ConfigurationOptionIncludeObjectSchema = makeSchema();
export const ConfigurationOptionIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionInclude.schema.js.map
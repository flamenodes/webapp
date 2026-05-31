import * as z from 'zod';
import { ConfigurationOptionArgsObjectSchema as ConfigurationOptionArgsObjectSchema } from './ConfigurationOptionArgs.schema';
const makeSchema = () => z.object({
    option: z.union([z.boolean(), z.lazy(() => ConfigurationOptionArgsObjectSchema)]).optional()
}).strict();
export const ConfigurationValueIncludeObjectSchema = makeSchema();
export const ConfigurationValueIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueInclude.schema.js.map
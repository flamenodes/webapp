import * as z from 'zod';
import { ConfigurationOptionSelectObjectSchema as ConfigurationOptionSelectObjectSchema } from './ConfigurationOptionSelect.schema';
import { ConfigurationOptionIncludeObjectSchema as ConfigurationOptionIncludeObjectSchema } from './ConfigurationOptionInclude.schema';
const makeSchema = () => z.object({
    select: z.lazy(() => ConfigurationOptionSelectObjectSchema).optional(),
    include: z.lazy(() => ConfigurationOptionIncludeObjectSchema).optional()
}).strict();
export const ConfigurationOptionArgsObjectSchema = makeSchema();
export const ConfigurationOptionArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionArgs.schema.js.map
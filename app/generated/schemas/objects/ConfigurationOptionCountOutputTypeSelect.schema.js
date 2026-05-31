import * as z from 'zod';
import { ConfigurationOptionCountOutputTypeCountValuesArgsObjectSchema as ConfigurationOptionCountOutputTypeCountValuesArgsObjectSchema } from './ConfigurationOptionCountOutputTypeCountValuesArgs.schema';
const makeSchema = () => z.object({
    values: z.union([z.boolean(), z.lazy(() => ConfigurationOptionCountOutputTypeCountValuesArgsObjectSchema)]).optional()
}).strict();
export const ConfigurationOptionCountOutputTypeSelectObjectSchema = makeSchema();
export const ConfigurationOptionCountOutputTypeSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionCountOutputTypeSelect.schema.js.map
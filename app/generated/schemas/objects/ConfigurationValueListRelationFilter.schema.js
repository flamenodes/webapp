import * as z from 'zod';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './ConfigurationValueWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => ConfigurationValueWhereInputObjectSchema).optional(),
    some: z.lazy(() => ConfigurationValueWhereInputObjectSchema).optional(),
    none: z.lazy(() => ConfigurationValueWhereInputObjectSchema).optional()
}).strict();
export const ConfigurationValueListRelationFilterObjectSchema = makeSchema();
export const ConfigurationValueListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueListRelationFilter.schema.js.map
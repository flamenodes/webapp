import * as z from 'zod';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './ConfigurationOptionWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => ConfigurationOptionWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ConfigurationOptionWhereInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionScalarRelationFilterObjectSchema = makeSchema();
export const ConfigurationOptionScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionScalarRelationFilter.schema.js.map
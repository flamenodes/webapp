import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
import { NestedEnumConfigurationOptionTypeFilterObjectSchema as NestedEnumConfigurationOptionTypeFilterObjectSchema } from './NestedEnumConfigurationOptionTypeFilter.schema';
const makeSchema = () => z.object({
    equals: ConfigurationOptionTypeSchema.optional(),
    in: ConfigurationOptionTypeSchema.array().optional(),
    notIn: ConfigurationOptionTypeSchema.array().optional(),
    not: z.union([ConfigurationOptionTypeSchema, z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumConfigurationOptionTypeFilterObjectSchema = makeSchema();
export const EnumConfigurationOptionTypeFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumConfigurationOptionTypeFilter.schema.js.map
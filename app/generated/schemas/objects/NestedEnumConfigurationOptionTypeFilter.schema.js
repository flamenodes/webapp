import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
const nestedenumconfigurationoptiontypefilterSchema = z.object({
    equals: ConfigurationOptionTypeSchema.optional(),
    in: ConfigurationOptionTypeSchema.array().optional(),
    notIn: ConfigurationOptionTypeSchema.array().optional(),
    not: z.union([ConfigurationOptionTypeSchema, z.lazy(() => NestedEnumConfigurationOptionTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumConfigurationOptionTypeFilterObjectSchema = nestedenumconfigurationoptiontypefilterSchema;
export const NestedEnumConfigurationOptionTypeFilterObjectZodSchema = nestedenumconfigurationoptiontypefilterSchema;
//# sourceMappingURL=NestedEnumConfigurationOptionTypeFilter.schema.js.map
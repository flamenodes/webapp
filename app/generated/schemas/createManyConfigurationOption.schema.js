import * as z from 'zod';
import { ConfigurationOptionCreateManyInputObjectSchema as ConfigurationOptionCreateManyInputObjectSchema } from './objects/ConfigurationOptionCreateManyInput.schema';
export const ConfigurationOptionCreateManySchema = z.object({ data: z.union([ConfigurationOptionCreateManyInputObjectSchema, z.array(ConfigurationOptionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ConfigurationOptionCreateManyZodSchema = z.object({ data: z.union([ConfigurationOptionCreateManyInputObjectSchema, z.array(ConfigurationOptionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyConfigurationOption.schema.js.map
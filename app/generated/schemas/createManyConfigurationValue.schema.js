import * as z from 'zod';
import { ConfigurationValueCreateManyInputObjectSchema as ConfigurationValueCreateManyInputObjectSchema } from './objects/ConfigurationValueCreateManyInput.schema';
export const ConfigurationValueCreateManySchema = z.object({ data: z.union([ConfigurationValueCreateManyInputObjectSchema, z.array(ConfigurationValueCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ConfigurationValueCreateManyZodSchema = z.object({ data: z.union([ConfigurationValueCreateManyInputObjectSchema, z.array(ConfigurationValueCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyConfigurationValue.schema.js.map
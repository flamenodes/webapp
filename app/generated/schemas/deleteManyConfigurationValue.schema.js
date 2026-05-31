import * as z from 'zod';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './objects/ConfigurationValueWhereInput.schema';
export const ConfigurationValueDeleteManySchema = z.object({ where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();
export const ConfigurationValueDeleteManyZodSchema = z.object({ where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyConfigurationValue.schema.js.map
import * as z from 'zod';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './objects/ConfigurationOptionWhereInput.schema';
export const ConfigurationOptionDeleteManySchema = z.object({ where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict();
export const ConfigurationOptionDeleteManyZodSchema = z.object({ where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyConfigurationOption.schema.js.map
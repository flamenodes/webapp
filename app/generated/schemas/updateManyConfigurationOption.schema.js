import * as z from 'zod';
import { ConfigurationOptionUpdateManyMutationInputObjectSchema as ConfigurationOptionUpdateManyMutationInputObjectSchema } from './objects/ConfigurationOptionUpdateManyMutationInput.schema';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './objects/ConfigurationOptionWhereInput.schema';
export const ConfigurationOptionUpdateManySchema = z.object({ data: ConfigurationOptionUpdateManyMutationInputObjectSchema, where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict();
export const ConfigurationOptionUpdateManyZodSchema = z.object({ data: ConfigurationOptionUpdateManyMutationInputObjectSchema, where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyConfigurationOption.schema.js.map
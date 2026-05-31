import * as z from 'zod';
import { ConfigurationValueUpdateManyMutationInputObjectSchema as ConfigurationValueUpdateManyMutationInputObjectSchema } from './objects/ConfigurationValueUpdateManyMutationInput.schema';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './objects/ConfigurationValueWhereInput.schema';
export const ConfigurationValueUpdateManySchema = z.object({ data: ConfigurationValueUpdateManyMutationInputObjectSchema, where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();
export const ConfigurationValueUpdateManyZodSchema = z.object({ data: ConfigurationValueUpdateManyMutationInputObjectSchema, where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyConfigurationValue.schema.js.map